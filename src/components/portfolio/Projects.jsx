import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Set SHOW_CURRENT_PROJECT to false to hide the in-progress project card.
const SHOW_CURRENT_PROJECT = true;

const currentProject = {
  name: "InsightCI",
  summary:
    "A self-hosted CI system built in Go, using Docker for isolated job execution, Redis for queueing, and Postgres (with pgvector) for state, artifacts, and failure analysis. Provides structured logs, test parsing, deterministic fingerprinting, and optional AI-based debugging.",
  status: "debugging",
  learningGoals: [
    "Strengthen understanding of CI architecture and execution pipelines",
    "Build production-grade AI analysis systems",
    "Improve reliability engineering and failure-diagnosis workflows",
  ],
};

const projects = [
  {
    name: "TinyIR",
    highlights: [
      "Built a command-line information retrieval engine indexing local text corpora via tokenization, an inverted index, and TF-IDF vectorization, ranking search results by cosine similarity.",
      "Designed a persistent index format (pickled vectorizer, vocabulary, postings list) enabling repeat queries without re-indexing.",
      "Covered tokenization, inverted-index postings, TF-IDF shape, and ranking order with a pytest suite; wired into CI via GitHub Actions.",
    ],
    github: "https://github.com/ewalshaw/tinyir",
    demo: "",
    youtubeId: "",
    tags: ["Python", "scikit-learn"],
  },
  {
    name: "pyglance",
    highlights: [
      "Built a dependency-free static analyzer that parses Python source into an AST to detect unused imports, functions exceeding a length threshold, and unreachable code after terminating statements.",
      "Implemented circular-import detection across local modules via import-graph traversal.",
      "Recursively analyzes directory trees while skipping virtual environments and build artifacts; exits non-zero on findings for CI use.",
    ],
    github: "https://github.com/ewalshaw/pyglance",
    demo: "",
    youtubeId: "",
    tags: ["Python", "AST"],
  },
  {
    name: "Carbon Calories",
    highlights: [
      "Built a full-stack food-tracking app delivering per-user carbon insights and meal recommendations, integrating a Next.js/React frontend with a Python backend and Gemini API for AI-powered meal analysis.",
    ],
    github: "",
    demo: "",
    youtubeId: "",
    tags: ["Python", "React", "Next.js", "MongoDB", "Gemini API"],
  },
];

/**
 * @param {{ name: string, summary: string, status: string, learningGoals: string[] }} props
 */
function CurrentProjectCard({ name, summary, status, learningGoals }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="border border-border rounded-lg p-6 bg-background"
    >
      <h3 className="font-mono text-lg font-semibold text-red-600 mb-5">
        CURRENT PROJECT: {name}
      </h3>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:pr-6">
          <p className="font-mono text-sm text-foreground/70 leading-relaxed">
            {summary}
          </p>
          <p className="font-mono text-sm text-foreground mt-4 text-left">
            <span className="font-bold">Current status:</span> {status}
          </p>
        </div>
        <div className="w-full h-px my-5 md:my-0 md:w-px md:h-auto md:self-stretch bg-border shrink-0" />
        <div className="flex-1 md:pl-6">
          <p className="font-mono text-base font-bold text-foreground mb-3">Learning goals:</p>
          <ul className="font-mono text-sm text-foreground/70 leading-relaxed list-disc space-y-2 pl-5">
            {learningGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * @param {{ youtubeId: string, name: string }} props
 */
function VideoEmbed({ youtubeId, name }) {
  if (!youtubeId) return null;
  return (
    <div className="aspect-video w-full border border-border rounded-lg overflow-hidden bg-background">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={`${name} demo`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-16 max-w-5xl mx-auto border-t border-border">
      <div className="font-mono text-sm text-mint mb-2">
        <span className="text-muted-foreground mr-2">$</span>ls -la ./projects/
      </div>
      <h2 className="font-mono text-2xl lg:text-3xl font-bold text-foreground mb-12">Projects</h2>

      <div className="space-y-12">
        {SHOW_CURRENT_PROJECT && (
          <CurrentProjectCard
            name={currentProject.name}
            summary={currentProject.summary}
            status={currentProject.status}
            learningGoals={currentProject.learningGoals}
          />
        )}
        {projects.map((p, i) => {
          const hasVideo = Boolean(p.youtubeId);
          const embedLeft = i % 2 === 0;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-border rounded-lg p-6 bg-background"
            >
              <div className={hasVideo ? "grid md:grid-cols-2 gap-6 items-center" : ""}>
                {hasVideo && (
                  <div className={embedLeft ? "md:order-1" : "md:order-2"}>
                    <VideoEmbed youtubeId={p.youtubeId} name={p.name} />
                  </div>
                )}
                <div className={hasVideo ? (embedLeft ? "md:order-2" : "md:order-1") : ""}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-mono text-lg font-semibold text-foreground">{p.name}</h3>
                    <div className="flex gap-2 shrink-0">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-azure hover:bg-azure hover:text-background transition-colors"
                          title="Live demo"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
                          title="GitHub"
                        >
                          <Github size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <ul className="font-mono text-sm text-foreground/70 leading-relaxed mb-4 list-disc space-y-2 pl-5">
                    {p.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 border border-border rounded text-muted-foreground bg-muted/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}