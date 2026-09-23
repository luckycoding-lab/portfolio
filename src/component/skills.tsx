import React from 'react';

interface SkillItem {
  name: string;
  icon: string;
  url?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    skills: [
      { name: 'HTML', icon: '/icons/html.svg' },
      { name: 'CSS', icon: '/icons/css.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'SQL', icon: '/icons/sql.png' },
    ],
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    skills: [
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'React', icon: '/icons/reactjs.svg' },
      { name: 'React Native', icon: '/icons/reactjs.svg' },
      { name: 'Express.js', icon: '/icons/expressjs.svg' },
      { name: 'TailwindCSS', icon: '/icons/tailwind.svg' },
    ],
  },
  {
    title: 'BACKEND & SERVICES',
    skills: [
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Appwrite', icon: '/icons/appwrite.png' },
      { name: 'OAuth 2.0', icon: '/icons/oauth.png' },
      { name: 'Telegram Bot API', icon: '/icons/telegram.png' },
    ],
  },
  {
    title: 'DATABASE',
    skills: [
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
    ],
  },
  {
    title: 'DEVELOPER TOOLS',
    skills: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Vercel', icon: '/icons/vercel.svg' },
      { name: 'VS Code', icon: '/icons/vscode.svg' },
      { name: 'Postman', icon: '/icons/postman.svg' },
    ],
  },
];

export default function Skills() {
  const badgeClasses =
    "flex items-center gap-2 rounded-lg border border-[#27272a] bg-[#18181b] px-3 py-2 text-xs font-medium text-white shadow transition-all hover:border-[#ff3576] hover:bg-[#202024] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff3576]";

  return (
    <section className="w-full py-8 text-neutral-100">
      <div className="mx-auto px-4 sm:px-0">
        {/* Section Heading & Subheading */}
        <div className="mb-2 flex items-baseline gap-3">
          <h2
            className="text-2xl font-bold tracking-widest text-white uppercase"
            style={{ fontFamily: "'Silkscreen', monospace" }}
          >
            Skills
          </h2>
          <span className="font-mono text-xs text-neutral-500">
            Which I use / know
          </span>
        </div>

        <p className="font-mono text-xs leading-relaxed text-neutral-400 sm:text-sm">
          A snapshot of the <span className="text-white">technologies</span>,{' '}
          <span className="text-white">tools</span>, and{' '}
          <span className="text-white">frameworks</span> I use to build scalable
          web applications. Always exploring new tools and expanding my technical
          stack.
        </p>

        {/* Categories Stack */}
        <div className="mt-8 space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex flex-col gap-3">
              {/* Category Label */}
              <div className="font-mono text-xs font-semibold tracking-wider text-neutral-400">
                {`< ${category.title} />`}
              </div>

              {/* Responsive Badge Grid */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {category.skills.map((skill, idx) => {
                  const content = (
                    <>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        className="h-4 w-4 shrink-0 object-contain sm:h-5 sm:w-5"
                      />
                      <span className="whitespace-nowrap">{skill.name}</span>
                    </>
                  );

                  return skill.url ? (
                    <a
                      key={idx}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={badgeClasses}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={idx} className={badgeClasses}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}