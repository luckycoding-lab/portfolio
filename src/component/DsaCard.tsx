import React from 'react';
import { ExternalLink, Code2, Cpu, HardDrive } from 'lucide-react';
import { TbBrandGithub } from 'react-icons/tb';

export interface DsaCardData {
  id?: string | number;
  title: string;
  category: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  solvedCount?: number | string;
  patterns: string[];
  githubUrl: string;
  leetcodeUrl?: string;
  featured?: boolean;
}

interface DsaCardProps {
  cardData: DsaCardData;
}

export const sampleDsaData: DsaCardData[] = [
  {
    id: 1,
    title: "Array & String Computational Patterns",
    category: "Arrays & Two-Pointers",
    description: "Optimized in-place solutions focusing on sliding windows, prefix sums, and space-efficient pointer manipulation for linear scans.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solvedCount: "45+ Solutions",
    patterns: ["Two-Pointers", "Sliding Window", "Prefix Sum"],
    githubUrl: "https://github.com/your-username/dsa-cpp-notes",
    leetcodeUrl: "https://leetcode.com",
    featured: true,
  },
  {
    id: 2,
    title: "Advanced Binary Search Variations",
    category: "Binary Search",
    description: "Mastery of monotonic search spaces, lower/upper bounds, and rotated sorted array identification with rigorous boundary management.",
    timeComplexity: "O(log N)",
    spaceComplexity: "O(1)",
    solvedCount: "25+ Solutions",
    patterns: ["Modified Binary Search", "Search Space Reduction"],
    githubUrl: "https://github.com/your-username/dsa-cpp-notes",
    leetcodeUrl: "https://leetcode.com",
  }
];

export default function DsaCard({ cardData }: DsaCardProps) {
  const {
    title,
    category,
    description,
    timeComplexity,
    spaceComplexity,
    solvedCount,
    patterns,
    githubUrl,
    leetcodeUrl,
    featured,
  } = cardData;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl border bg-[#0c0c0e] p-5 transition-all duration-300 hover:border-[#ff3576]/50 hover:bg-[#121215] hover:shadow-xl hover:shadow-[#ff3576]/5 ${
        featured ? 'border-[#ff3576]/40 bg-linear-to-b from-[#141217] to-[#0c0c0e]' : 'border-[#27272a]'
      }`}
    >
      <div>
        {/* Top Header & Category */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#ff3576]">
            {category}
          </span>
          
          {solvedCount && (
            <span className="font-mono text-[11px] text-neutral-400">
              {solvedCount}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-3 font-mono text-base font-bold text-white transition-colors group-hover:text-[#ff3576]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 font-mono text-xs leading-relaxed text-neutral-400">
          {description}
        </p>

        {/* Big-O Complexity Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-2 border-y border-neutral-900 py-2.5">
          <div className="flex items-center gap-1.5 rounded bg-neutral-900 px-2 py-1 font-mono text-[11px] text-neutral-300 border border-neutral-800">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>Time: <strong className="text-white">{timeComplexity}</strong></span>
          </div>

          <div className="flex items-center gap-1.5 rounded bg-neutral-900 px-2 py-1 font-mono text-[11px] text-neutral-300 border border-neutral-800">
            <HardDrive className="h-3.5 w-3.5 text-emerald-400" />
            <span>Space: <strong className="text-white">{spaceComplexity}</strong></span>
          </div>
        </div>

        {/* Pattern Badges */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {patterns.map((pattern, idx) => (
            <span
              key={idx}
              className="rounded border border-neutral-800 bg-[#141417] px-2 py-0.5 font-mono text-[10px] text-neutral-400"
            >
              #{pattern}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-neutral-900 pt-4">
        <div className="flex items-center gap-1.5 text-neutral-500">
          <Code2 className="h-4 w-4" />
          <span className="font-mono text-[11px]">Optimized Blueprint</span>
        </div>

        <div className="flex items-center gap-2">
          {leetcodeUrl && (
            <a
              href={leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode Problem Set"
              className="rounded-md border border-neutral-800 bg-neutral-900 p-2 text-neutral-400 transition-colors hover:border-[#ff3576] hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Code Repository"
            className="flex items-center gap-1.5 rounded-md border border-[#27272a] bg-[#18181b] px-3 py-1.5 font-mono text-xs font-medium text-white transition-all hover:border-[#ff3576] hover:bg-[#202024]"
          >
            <TbBrandGithub className="h-4 w-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}