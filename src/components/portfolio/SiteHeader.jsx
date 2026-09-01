import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "intro", label: "intro" },
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "research", label: "research" },
  { id: "volunteering", label: "volunteering" },
  { id: "contact", label: "contact" },
];

export default function SiteHeader() {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);
  const headerRef = React.useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = s.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Close on Escape and on clicks outside the header
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onPointer = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer, true);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer, true);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[60] bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-16 h-12 flex items-center justify-between">
        <span className="font-mono text-sm text-muted-foreground">erin@portfolio</span>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleClick(e, s.id)}
              className={`font-mono text-sm transition-colors ${
                active === s.id
                  ? "text-azure"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-muted-foreground hover:text-foreground touch-manipulation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          className="sm:hidden fixed left-0 right-0 top-12 z-[60] border-b border-border bg-background shadow-lg"
        >
          <div className="max-w-5xl mx-auto px-6 py-2 flex flex-col">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className={`font-mono text-sm py-3 border-b border-border/60 last:border-b-0 transition-colors ${
                  active === s.id
                    ? "text-azure"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}