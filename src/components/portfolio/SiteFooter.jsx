import React from "react";
import { Mail, Linkedin, Github, FileText, MapPin, Globe, GraduationCap } from "lucide-react";

const contactLinks = [
  { label: "Email", display: "erinwalshaw@outlook.com", href: "mailto:erinwalshaw@outlook.com", icon: Mail },
  { label: "LinkedIn", display: "linkedin.com/in/erinwalshaw", href: "https://www.linkedin.com/in/erinwalshaw/", icon: Linkedin },
  { label: "GitHub", display: "github.com/ewalshaw", href: "https://github.com/ewalshaw", icon: Github },
  { label: "Resume", display: "Erin Walshaw Resume.pdf", href: "/Erin%20Walshaw%20Resume.pdf", icon: FileText },
].filter((link) => link.href);

export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border px-6 lg:px-16 py-16 max-w-5xl mx-auto">
      <div className="font-mono text-sm text-mint mb-2">
        <span className="text-muted-foreground mr-2">$</span>./shutdown --contact
      </div>
      <h2 className="font-mono text-2xl font-bold text-foreground mb-8">Let's Connect</h2>

      <div className="border border-border rounded-lg overflow-hidden">
        {/* Terminal header */}
        <div className="h-9 bg-muted border-b border-border flex items-center px-3 gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-mint" />
          <span className="w-2.5 h-2.5 rounded-full bg-azure" />
          <span className="w-2.5 h-2.5 rounded-full bg-mint" />
          <span className="ml-auto text-xs text-muted-foreground font-mono">erin@portfolio: ~</span>
        </div>
        {/* Terminal body */}
        <div className="p-6 font-mono text-sm space-y-2">
          <p className="text-foreground/80">
            <span className="text-mint">erin@portfolio</span>:<span className="text-azure">~</span>$ whoami
          </p>
          <div className="text-foreground/70 pl-4 space-y-1">
            <p className="flex items-center gap-2">
              <GraduationCap size={14} /> CS &amp; AI · Economics · University of Waterloo
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={14} /> Toronto, open to relocation
            </p>
            <p className="flex items-center gap-2">
              <Globe size={14} /> Canada &amp; UK dual citizenship
            </p>
          </div>
          <p className="text-foreground/80">
            <span className="text-mint">erin@portfolio</span>:<span className="text-azure">~</span>$ cat contact.txt
          </p>
          <div className="pl-4 space-y-1.5">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-foreground/70 hover:text-azure transition-colors w-fit"
                >
                  <Icon size={14} /> {link.display}
                </a>
              );
            })}
            {contactLinks.length === 0 && (
              <p className="text-muted-foreground">// contact details coming soon</p>
            )}
          </div>
          <p className="text-foreground/80 pt-2">
            <span className="text-mint">erin@portfolio</span>:<span className="text-azure">~</span>${" "}
            <span className="animate-blink">█</span>
          </p>
        </div>
      </div>

      <p className="font-mono text-xs text-muted-foreground mt-8 text-center">
        // Built with React, Vite, Tailwind CSS, Framer Motion, and React Router · 2026 Erin Walshaw
      </p>
    </footer>
  );
}