import React from "react";
import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import { labsData } from "../data/labsData";

export default function Labs() {
  return (
    <section className="w-full text-neutral-100">
      <div className="mx-auto sm:px-0">
        {/* Section Header */}
        <div className="mb-2 flex flex-wrap items-baseline gap-2 sm:gap-4">
          <h2
            className="text-2xl font-bold tracking-widest text-white uppercase"
            style={{ fontFamily: "'Silkscreen', monospace" }}
          >
            Labs
          </h2>
          <span className="font-mono text-xs text-neutral-500">
            production_ready_builds.sh
          </span>
        </div>

        <p className="mb-6 font-mono text-xs leading-relaxed text-neutral-400 sm:text-sm">
          Deep dive into my{" "}
          <span className="text-white">highest-standard systems</span>,
          combining <span className="text-white">intuitive UX</span>, robust
          backend engineering, and{" "}
          <span className="text-white">scalable codebases</span>.
        </p>

        {/* Minimal Stacked List Layout */}
        <div className="divide-y divide-neutral-900 rounded-xl border border-[#27272a] bg-[#0c0c0e]">
          {labsData.map((lab) => (
            <div
              key={lab.id}
              className="group flex flex-col justify-between gap-3 p-4 transition-all duration-200 hover:bg-[#131317] sm:flex-row sm:items-center"
            >
              {/* Left Column: Terminal Prefix + Title + Description */}
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-[#8b5cf6] transition-transform group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <a
                    href={lab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-semibold text-white transition-colors hover:underline group-hover:text-[#8b5cf6]"
                  >
                    {lab.name}
                  </a>
                  <span className="rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400">
                    {lab.category}
                  </span>
                </div>

                <p className="font-mono text-xs text-neutral-400">
                  {lab.description}
                </p>
              </div>

              {/* Right Column: Meta (Language + Stars + Direct Action Links) */}
              <div className="flex shrink-0 items-center justify-between gap-4 font-mono text-xs text-neutral-500 sm:justify-end">
                {/* Language Tag with Dot */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-full ${lab.langColor || "bg-neutral-500"}`}
                  />
                  <span>{lab.language}</span>
                </div>

                {/* Stars */}
                {lab.stars !== undefined && (
                  <div className="flex items-center gap-1 text-neutral-400">
                    <Star className="h-3 w-3 fill-yellow-500/70 text-yellow-500" />
                    <span>{lab.stars}</span>
                  </div>
                )}

                {/* Dual Action Links */}
                <div className="flex items-center gap-2">
                  {/* Deployed Web Link (Vercel / Live Preview) */}
                  {lab.liveUrl && (
                    <a
                      href={lab.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit Live App"
                      className="flex items-center gap-1 rounded border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-2 py-1 text-[11px] text-[#8b5cf6] transition-colors hover:border-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white"
                    >
                      <span>Live</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}

                  {/* GitHub Repository Arrow */}
                  <a
                    href={lab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    className="p-1 text-neutral-500 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}