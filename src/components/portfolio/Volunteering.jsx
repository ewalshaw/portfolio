import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const roles = [
  {
    role: "Director of Finance",
    organization: "University of Waterloo Women in Computer Science",
    period: "May 2026 — August 2026",
    description:
      "Oversee committee finances by processing cheque requests, maintaining accurate budgets and records, securing funding with the Chair, and representing the organization in all financial meetings.",
  },
  {
    role: "Student Ambassador",
    organization: "University of Waterloo",
    period: "May 2026 — August 2026",
    description:
      "Represent the University of Waterloo to prospective students and external audiences, communicating the university's academic programs and research culture.",
  },
  {
    role: "Project Manager and Administrative Officer",
    organization: "St. Jerome's University Students' Union",
    period: "May 2025 — April 2026",
    description:
      "Oversaw university clubs' finances, reimbursements, and approvals, and organized the annual Gala.",
  },
  {
    role: "Peer Academic Leader",
    organization: "St. Jerome's University",
    period: "September — December 2025",
    description:
      "Improved academic outcomes and well-being for residence students by developing campus-wide workshops, providing one-on-one mentorship, and connecting students to advising and support services.",
  },
  {
    role: "Elections & Referenda At-Large Committee Member",
    organization: "Waterloo Undergraduate Student Association",
    period: "September 2025 — February 2026",
    description:
      "Strengthened electoral integrity and student trust in governance by reviewing candidate appeals for policy compliance and recommending updates that improved procedural clarity and fairness.",
  },
  {
    role: "Campus Wellness Student Advisory Committee Representative",
    organization: "University of Waterloo Campus Health",
    period: "September 2025 — March 2026",
    description:
      "Collaborated with administrators, faculty, and students to evaluate existing programs and identify gaps in health and academic support resources.",
  },
];

export default function Volunteering() {
  const scrollerRef = useRef(/** @type {HTMLDivElement | null} */ (null));
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    /** @param {WheelEvent} e */
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY });
      }
    };
    el.addEventListener("scroll", updateArrows, { passive: true });
    el.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      el.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  /** @param {number} dir */
  const scrollByPage = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="volunteering" className="py-20 lg:py-32 px-6 lg:px-16 max-w-5xl mx-auto border-t border-border">
      <div className="font-mono text-sm text-mint mb-2">
        <span className="text-muted-foreground mr-2">$</span>cat leadership.log
      </div>
      <div className="flex items-center justify-between gap-4 mb-12">
        <h2 className="font-mono text-2xl lg:text-3xl font-bold text-foreground">
          Leadership &amp; Volunteering
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scrollByPage(-1)}
            disabled={!canLeft}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollByPage(1)}
            disabled={!canRight}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-1 px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {roles.map((r, i) => {
          return (
            <motion.div
              key={r.role + r.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="snap-start shrink-0 w-[80%] sm:w-[45%] md:w-[calc((100%-3rem)/3)] border border-border rounded-lg p-6 bg-background"
            >
              <span className="font-mono text-xs text-muted-foreground block mb-1">{r.period}</span>
              <h3 className="font-mono text-base font-semibold text-foreground mb-1">{r.role}</h3>
              <p className="font-mono text-sm text-azure mb-3">{r.organization}</p>
              <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                {r.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
