import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const experiences = [
  {
    role: "Business Technology Analyst Intern",
    company: "Manulife",
    period: "September 2026 — Present",
    location: "Toronto, ON",
    highlights: [
      "Building an AI-enabled forecasting tool in Python to improve Azure budgeting.",
    ],
    tags: ["Python", "Forecasting", "Microsoft Azure"],
  },
  {
    role: "Software Developer Intern",
    company: "Poket",
    period: "January — April 2026",
    location: "Vancouver, BC",
    highlights: [
      "Shipped production bug fixes and usability improvements to the Poket Portal in JavaScript, HTML, and CSS.",
      "Migrated the codebase from Angular 16 to 17, resolving breaking API changes and dependency conflicts.",
      "Instrumented the Poket Portal with GTM/GA4/Microsoft Clarity with 30+ custom events to enable behavioral analysis for engineering prioritization.",
      "Redesigned the client-facing site for SEO and LLM-search discoverability, targeting both traditional rankings and AI-powered search surfaces.",
    ],
    tags: ["Angular", "JavaScript", "HTML", "CSS", "Analytics", "SEO"],
  },
  {
    role: "Machine Learning Research Assistant",
    company: "University of Waterloo",
    period: "September — December 2025",
    location: "Waterloo, ON",
    highlights: [
      "Implemented causal intervention pipelines in PyTorch to replicate core results from the JAM paper, manipulating LLM latent vectors to steer generative outputs toward target behavioral profiles.",
      "Built reproducible experiment infrastructure for comparing latent-space steering methods across model checkpoints.",
      "Formalized model behavioral constraints as geometric structures over latent representation space as part of an alignment research framework.",
    ],
    tags: ["PyTorch", "LLMs", "Model Alignment", "Causal Reasoning"],
  },
  {
    role: "Futures Lab: AI + UX Prototyping",
    company: "University of Waterloo",
    period: "September — December 2025",
    location: "Waterloo, ON",
    highlights: [
      "Built an AI-powered learning tool for hardware design courses using Gemini and Google AI Studio, in an 8-week interdisciplinary program with Master's/PhD students and Google mentors.",
      "Presented prototype and user testing results at the Google-UWaterloo Symposium on the Future of Learning.",
      "Selected as 1 of 5 students for a panel interview with Google featured on their blog.",
    ],
    tags: ["Gemini", "Google AI Studio", "UX Design", "AI Prototyping"],
  },
  {
    role: "Assistant Math & English Instructor",
    company: "Kumon Math & Reading Center",
    period: "September 2023 — June 2024",
    location: "Vancouver, BC",
    highlights: [
      "Assessed 100+ students on advanced mathematics.",
    ],
    tags: ["Mathematics", "Public Speaking"],
  },
  {
    role: "Assistant Mathematics Teacher",
    company: "Spirit of Math Schools",
    period: "September 2021 — June 2022",
    location: "Vancouver, BC",
    highlights: [
      "Co-instructed advanced math classes for Kindergarten to Grade 9 students, supporting curriculum delivery and individualized skill reinforcement in a high-academic-standard environment.",
    ],
    tags: ["Mathematics", "Education", "Customer Service"],
  },
];

export default function WorkHistory() {
  return (
    <section id="work" className="py-20 lg:py-32 px-6 lg:px-16 max-w-5xl mx-auto">
      <div className="font-mono text-sm text-mint mb-2">
        <span className="text-muted-foreground mr-2">$</span>cat work_history.log
      </div>
      <h2 className="font-mono text-2xl lg:text-3xl font-bold text-foreground mb-12">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 lg:left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-8 lg:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] lg:left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-mint border-2 border-background" />

              <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin size={11} /> {exp.location}
                </span>
              </div>
              <h3 className="font-mono text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="font-mono text-sm text-azure mb-3">{exp.company}</p>
              <ul className="font-mono text-sm text-foreground/70 leading-relaxed mb-4 max-w-3xl list-disc space-y-2 pl-5">
                {exp.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 border border-border rounded text-muted-foreground bg-muted/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}