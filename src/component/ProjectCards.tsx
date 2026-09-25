import React from "react";
import { ExternalLink, Star, Calendar } from "lucide-react";
import { projects, Project } from "../data/projects";
import { TbBrandGithub } from "react-icons/tb";

export default function ProjectCards() {
  return (
    <section className="py-8 text-neutral-100">
      <div className="mx-auto px-4 sm:px-0">
        
        {/* Section Heading */}
        <div className="mb-8">
          <div className="flex items-baseline gap-3">
            <h2
              className="text-2xl font-bold tracking-widest text-white uppercase"
              style={{ fontFamily: "'Silkscreen', monospace" }}
            >
              Projects
            </h2>
            <span className="font-mono text-xs text-neutral-500">
              commercial_work.sh
            </span>
          </div>

          <p className="mt-2 font-mono text-xs leading-relaxed text-neutral-400 sm:text-sm">
            A curated showcase of{" "}
            <span className="text-white">commercial web applications</span>,{" "}
            <span className="text-white">client platforms</span>, and{" "}
            <span className="text-white">side projects</span> I've designed and
            built with a focus on usability, speed, and modern UI.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-4">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c0e] p-3.5 transition-all duration-300 hover:border-[#7c3aed] hover:bg-[#111114] hover:shadow-xl hover:shadow-[#ff3576]/5 md:flex-row md:items-stretch"
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 md:aspect-auto md:w-56 lg:w-64">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Rank Ribbon Badge */}
                {project.rankRibbon && (
                  <div className="absolute top-2.5 left-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/75 text-[9px] font-bold text-white shadow-lg backdrop-blur-md">
                    <span className="text-center leading-none">
                      {project.rankRibbon}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                <div className="space-y-2.5">
                  {/* Top Bar: Title, Year, Stars & Links */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <h3 className="truncate font-mono text-base font-bold text-white transition-colors group-hover:text-[#7c3aed] sm:text-lg">
                        {project.title}
                      </h3>

                      {/* Year Indicator */}
                      {project.year && (
                        <span className="inline-flex items-center gap-1 rounded border border-neutral-800 bg-neutral-900/80 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400">
                          <Calendar className="h-3 w-3 text-neutral-500" />
                          {project.year}
                        </span>
                      )}

                      {/* Stars / Metric Badge */}
                      {project.stars && (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                          {project.stars}
                          <Star className="h-3 w-3 fill-emerald-400 text-emerald-400" />
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex shrink-0 items-center gap-1.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-1.5 text-neutral-400 transition-colors hover:border-[#5b21b6] hover:text-white"
                          title="Visit Live Preview"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-1.5 text-neutral-400 transition-colors hover:border-[#5b21b6] hover:text-white"
                          title="View GitHub Repository"
                        >
                          <TbBrandGithub className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Optional Status Badge */}
                  {project.badge && (
                    <div className="w-fit">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900/90 px-2 py-0.5 font-mono text-[10px] font-medium text-neutral-300">
                        {project.badge.icon && (
                          <span className="text-[10px] text-[#5b21b6]">
                            {project.badge.icon}
                          </span>
                        )}
                        {project.badge.text}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="font-mono text-xs leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                </div>

                {/* Technologies List */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-neutral-900/80 pt-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded border border-neutral-800/80 bg-[#141417] px-2 py-0.5 font-mono text-[10px] text-neutral-400 transition-colors group-hover:border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}