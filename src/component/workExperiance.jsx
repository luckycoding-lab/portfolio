import deepaliLogo from '../assets/deepali.png';
import clawStepsLogo from '../assets/Logo.png';

const experiences = [
  {
    company: 'Claw Steps',
    badge: 'Web Developer',
    role: 'Web Developer & UI/UX Designer',
    date: 'Aug 2025 - Present',
    location: 'New Delhi, India',
    logo: clawStepsLogo,
    description:
      'Designed and developed the Claw Steps website with a user-friendly, mobile-responsive layout focused on seamless booking, SEO optimization, and brand consistency.',
  },
  {
    company: 'Deepali Designs Pvt. Ltd.',
    badge: 'Intern',
    role: 'Archiving & Junior Software Tester',
    date: 'Apr 2023 - 2025',
    location: 'New Delhi, India',
    logo: deepaliLogo,
    description:
      'Collaborated with developers to test, debug, and optimize software performance, ensuring smooth functionality and user experience across multiple platforms.',
  },
];

export default function WorkExperience() {
  return (
    <div className="mx-auto  px-4">
      {/* Section Heading */}
      <div className="mb-8 flex items-baseline gap-4">
        <h2
          className="text-2xl font-bold tracking-widest text-white uppercase"
          style={{ fontFamily: "'Silkscreen', monospace" }}
        >
          Work
        </h2>
        <span className="font-mono text-xs text-neutral-500">
          Here is my work experience!
        </span>
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-3">
            {/* Header Row */}
            <div className="flex items-start justify-between gap-4">
              {/* Left: Logo & Company Info */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-1.5 shadow-inner">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex flex-col items-start gap-2 sm:flex-row">
                    <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                      {exp.company}
                      {exp.badge && (
                        <span className="shrink-0 whitespace-nowrap rounded-full border border-neutral-700/50 bg-neutral-800/80 px-1.5 py-0.5 text-[9px] font-medium text-neutral-400 sm:px-2 sm:text-[10px]">
                          {exp.badge}
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400">{exp.role}</p>
                </div>
              </div>

              {/* Right: Date & Location */}
              <div className="text-right font-mono">
                <p className="text-xs font-medium text-neutral-300">
                  {exp.date}
                </p>
                <p className="text-[11px] text-neutral-500">{exp.location}</p>
              </div>
            </div>

            {/* Bullet Description */}
            <div className="ml-1 flex items-start gap-3 pl-1">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
              <p className="text-xs leading-relaxed text-neutral-400">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}