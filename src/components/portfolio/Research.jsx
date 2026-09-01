import React from "react";
import { motion } from "framer-motion";

const research = [
  {
    role: "Digital Civics for Community Engagement with Technology",
    company: "UWaterloo Directed Reading Program",
    period: "January — April 2026",
    description:
      "Produced community-focused technology design guidelines recognized with a feature in the Notes From the Margin publication.",
    tags: ["Human-Computer Interaction", "Human Factors", "AI in Society"],
  },
  {
    role: "ML Research: Constitutional Simplex",
    company: "Computing Research Association",
    period: "September — December 2025",
    description:
      "Conducted research toward a mathematically-grounded alignment framework (constitutional simplex), formalizing model behavioral constraints as geometric structures over latent representation space.",
    tags: ["Machine Learning", "Model Alignment", "LLMs"],
  },
  {
    role: "From Design to Adoption: Privacy-Enhancing Techniques in Health Data",
    company: "UWaterloo Directed Reading Program",
    period: "May — August 2025",
    description:
      "Analyzed trade-offs of privacy techniques to maximize data utility and consumer safeguards.",
    tags: ["Data Privacy", "Cybersecurity", "Healthcare"],
  },
];

export default function Research() {
  return (
    <section id="research" className="py-20 lg:py-32 px-6 lg:px-16 max-w-5xl mx-auto border-t border-border">
      <div className="font-mono text-sm text-mint mb-2">
        <span className="text-muted-foreground mr-2">$</span>cat research.log
      </div>
      <h2 className="font-mono text-2xl lg:text-3xl font-bold text-foreground mb-12">
        Research
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 lg:left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {research.map((exp, i) => (
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
              </div>
              <h3 className="font-mono text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="font-mono text-sm text-azure mb-3">{exp.company}</p>
              <p className="font-mono text-sm text-foreground/70 leading-relaxed mb-4 max-w-2xl">
                {exp.description}
              </p>
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