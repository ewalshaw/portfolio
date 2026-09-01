import React from "react";
import { motion } from "framer-motion";
import { FileText, Linkedin, Github, Mail, BriefcaseBusiness, MapPin } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:erinwalshaw@outlook.com", icon: Mail, accent: "azure" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/erinwalshaw/", icon: Linkedin, accent: "azure" },
  { label: "GitHub", href: "https://github.com/ewalshaw", icon: Github, accent: "azure" },
  { label: "Resume", href: "/Erin%20Walshaw%20Resume.pdf", icon: FileText, accent: "azure" },
];
const availableLinks = links.filter((link) => link.href);

// Profile photo: set PHOTO_URL to a path or hosted URL. Leave "" for the placeholder.
const PHOTO_URL = "/photo.jpg";

export default function Hero() {
  return (
    <section id="intro" className="min-h-screen flex flex-col lg:flex-row border-b border-border">
      {/* Left: Photo placeholder */}
      <div className="lg:w-1/2 relative flex items-center justify-center p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-border bg-muted/30">
        <div className="relative w-full max-w-sm aspect-[3/4]">
          {/* Terminal window header */}
          <div className="h-9 bg-muted border border-border border-b-0 rounded-t-lg flex items-center px-3 gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-mint" />
            <span className="w-2.5 h-2.5 rounded-full bg-azure" />
            <span className="w-2.5 h-2.5 rounded-full bg-mint" />
            <span className="ml-auto text-xs text-muted-foreground font-mono">photo.jpg</span>
          </div>
          {/* Photo area */}
          <div className="h-[calc(100%-2.25rem)] border border-border border-t-0 rounded-b-lg overflow-hidden bg-gradient-to-br from-background to-muted relative flex flex-col items-center justify-center">
            {/* Scanning line */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-mint/30 z-10"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
            />
            {PHOTO_URL ? (
              <img src={PHOTO_URL} alt="Erin Walshaw" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <>
                <div className="text-8xl font-bold text-foreground/15 mb-3 select-none">E</div>
                <p className="text-xs text-muted-foreground font-mono">// replace with your photo</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right: Bio + Links */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-lg">
          <div className="font-mono text-sm text-mint mb-8">
            <span className="text-muted-foreground mr-2">$</span>cat about.txt
          </div>
          <motion.h1
            className="font-mono text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Hi, my name is Erin.
          </motion.h1>
          <motion.div
            className="font-mono text-sm text-foreground/80 mb-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={17} className="text-mint shrink-0" />
              <span>Business Technology Analyst Intern at Manulife</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={17} className="text-azure shrink-0" />
              <span>Toronto, open to relocation</span>
            </div>
          </motion.div>
          <motion.p
            className="font-mono text-lg text-foreground/80 mb-3 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            I'm a 3rd-year University of Waterloo Computer Science student specializing in {""}
            <span className="text-mint font-medium">Artificial Intelligence</span>{" "}
            with a minor in{" "}
            <span className="text-azure font-medium">Economics</span>.
          </motion.p>
          <p className="font-mono text-sm text-muted-foreground mb-4">
            // currently exploring ai/ml, software engineering, and product
          </p>

          {/* Links */}
          <div className="font-mono text-sm text-mint mb-4">
            <span className="text-muted-foreground mr-2">$</span>ls -la ./links/
          </div>
          <div className="flex flex-wrap gap-3">
            {availableLinks.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 border rounded-md font-mono text-sm transition-all hover:-translate-y-0.5 ${
                    link.accent === "mint"
                      ? "border-mint/40 text-mint hover:bg-mint hover:text-background"
                      : "border-azure/40 text-azure hover:bg-azure hover:text-background"
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
            {availableLinks.length === 0 && (
              <p className="font-mono text-sm text-muted-foreground">
                // links coming soon
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}