import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { projects } from "../data/projects";
import { TbBrandGithub } from "react-icons/tb";

export default function ProjectCards() {
  return (
    <section className="py-8 text-neutral-100">
      <div className="mx-auto sm:px-0">
        {/* Section Heading */}
        <div className="mb-8 flex flex-wrap items-baseline gap-2 sm:gap-4">
          <h2
            className="text-2xl font-bold tracking-widest text-white uppercase"
            style={{ fontFamily: "'Silkscreen', monospace" }}
          >
            Projects
          </h2>
          <span className="font-mono text-xs text-neutral-500">
            Here is my commercial work
          </span>

          <p className="font-mono text-xs leading-relaxed text-neutral-400 sm:text-sm">
            A curated showcase of{" "}
            <span className="text-white">commercial web applications</span>,{" "}
            <span className="text-white">client platforms</span>, and{" "}
            <span className="text-white">side projects</span> I've designed and
            built with a focus on usability, speed, and modern UI.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c0e] p-3.5 transition-all duration-300 hover:border-neutral-700 hover:shadow-lg md:flex-row md:items-stretch"
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 md:aspect-auto md:w-52 lg:w-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {project.rankRibbon && (
                  <div className="absolute top-2 left-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-[9px] font-bold text-white shadow-md backdrop-blur-md">
                    <span className="text-center leading-tight">
                      {project.rankRibbon}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                <div className="space-y-2">
                  {/* Top Bar: Title, Stars, & Action Links */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      <h3 className="truncate text-base font-bold text-white transition-colors group-hover:text-neutral-100 sm:text-lg">
                        {project.title}
                      </h3>

                      {project.stars && (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
                          {project.stars}
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
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
                          className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-1.5 text-neutral-400 transition-colors hover:border-neutral-700 hover:text-white"
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
                          className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-1.5 text-neutral-400 transition-colors hover:border-neutral-700 hover:text-white"
                          title="View GitHub"
                        >
                          <TbBrandGithub className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Optional Badge */}
                  {project.badge && (
                    <div className="w-fit">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-neutral-300">
                        {project.badge.icon && (
                          <span className="text-[9px]">
                            {project.badge.icon}
                          </span>
                        )}
                        {project.badge.text}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="font-mono text-xs leading-relaxed text-neutral-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
