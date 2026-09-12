import React from 'react';
import { ArrowUpRight, Star, GitFork, Terminal } from 'lucide-react';

export interface LabItem {
  id: string | number;
  name: string;
  category: string;
  description: string;
  url: string;
  stars?: string | number;
  language: string;
  langColor?: string; // Tailwind color dot
}

const labsData: LabItem[] = [
  {
    id: 1,
    name: 'Tailwind-Labs',
    category: 'UI / Components',
    description: 'Curated modern responsive UI components & interactive micro-interactions.',
    url: 'https://github.com/your-username/Tailwind-Labs',
    stars: 18,
    language: 'Tailwind',
    langColor: 'bg-cyan-400',
  },
  {
    id: 2,
    name: 'javascript-playground',
    category: 'DOM & Web APIs',
    description: '30+ hands-on vanilla JS mini-projects mastering async & event handling.',
    url: 'https://github.com/your-username/javascript-playground',
    stars: 24,
    language: 'JavaScript',
    langColor: 'bg-yellow-400',
  },
  {
    id: 3,
    name: 'dsa-cpp-notes',
    category: 'Algorithms',
    description: 'Data structures & algorithms patterns for competitive programming.',
    url: 'https://github.com/your-username/dsa-cpp-notes',
    stars: 12,
    language: 'C++',
    langColor: 'bg-blue-400',
  },
  {
    id: 4,
    name: 'node-auth-api',
    category: 'Backend Architecture',
    description: 'Production REST API boilerplate with JWT, RBAC, and rate limiting.',
    url: 'https://github.com/your-username/node-auth-api',
    stars: 9,
    language: 'TypeScript',
    langColor: 'bg-indigo-400',
  },
];

export default function Labs() {
  return (
    <section className="w-full text-neutral-100">
      <div className="mx-auto px-4 sm:px-0">
        
        {/* Section Header */}
        <div className="mb-2 flex flex-wrap items-baseline gap-2 sm:gap-4">
          <h2
            className="text-2xl font-bold tracking-widest text-white uppercase"
            style={{ fontFamily: "'Silkscreen', monospace" }}
          >
            Labs
          </h2>
          <span className="font-mono text-xs text-neutral-500">
            open_source_experiments.sh
          </span>
        </div>

        <p className="mb-6 font-mono text-xs leading-relaxed text-neutral-400 sm:text-sm">
          A terminal view of open-source <span className="text-white">experiments</span>,{' '}
          <span className="text-white">utility modules</span>, and{' '}
          <span className="text-white">codebase templates</span>.
        </p>

        {/* Minimal Stacked List Layout */}
        <div className="divide-y divide-neutral-900 rounded-xl border border-[#27272a] bg-[#0c0c0e]">
          {labsData.map((lab) => (
            <a
              key={lab.id}
              href={lab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-3 p-4 transition-all duration-200 hover:bg-[#131317] sm:flex-row sm:items-center"
            >
              {/* Left Column: Terminal Prefix + Title + Description */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#8b5cf6] transition-transform group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <h3 className="font-mono text-sm font-semibold text-white transition-colors group-hover:text-[#8b5cf6]">
                    {lab.name}
                  </h3>
                  <span className="rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 font-mono text-[10px] text-neutral-400">
                    {lab.category}
                  </span>
                </div>

                <p className="font-mono text-xs text-neutral-400">
                  {lab.description}
                </p>
              </div>

              {/* Right Column: Meta (Language + Stars + Action) */}
              <div className="flex shrink-0 items-center justify-between gap-4 font-mono text-xs text-neutral-500 sm:justify-end">
                {/* Language Tag with Dot */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-full ${lab.langColor || 'bg-neutral-500'}`}
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

                {/* Hover Action Arrow */}
                <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}