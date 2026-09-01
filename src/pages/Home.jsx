import React from "react";
import Hero from "@/components/portfolio/Hero";
import WorkHistory from "@/components/portfolio/WorkHistory";
import Volunteering from "@/components/portfolio/Volunteering";
import Projects from "@/components/portfolio/Projects";
import Research from "@/components/portfolio/Research";
import SiteHeader from "@/components/portfolio/SiteHeader";
import SiteFooter from "@/components/portfolio/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <WorkHistory />
      <Projects />
      <Research />
      <Volunteering />
      <SiteFooter />
    </div>
  );
}