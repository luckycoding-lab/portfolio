import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Blog {
  id: string | number;
  title: string;
  url: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: 'How to Set Up VS Code for DSA and CP (C++ Users)',
    url: 'https://example.com/blog/vs-code-dsa-cp',
  },
  {
    id: 2,
    title: 'C++ STL Complete Guide for Competitive Programming',
    url: 'https://example.com/blog/cpp-stl-guide',
  },
  {
    id: 3,
    title: 'How to Build a Modern Blog Website with Next.js and...',
    url: 'https://example.com/blog/nextjs-blog',
  },
  // ➕ Add more blogs here easily
];

export default function BlogsSection() {
  return (
    <section className="py-8 text-neutral-100">
      <div className="mx-auto  px-4">
        {/* Section Header */}
        <p className="mb-4 font-mono text-sm text-neutral-400">
          Here are some <span className="font-semibold text-white">blogs</span> I've written
        </p>

        {/* Blogs List */}
        <div className="flex flex-col gap-3">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-[#0c0c0e] px-4 py-3.5 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900/40 focus:outline-none"
            >
              {/* Title */}
              <span className="truncate pr-3 font-mono text-xs font-medium text-white transition-colors group-hover:text-neutral-200 sm:text-sm">
                {blog.title}
              </span>

              {/* External Link Icon */}
              <ExternalLink className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}