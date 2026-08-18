import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { TbBrandGithub } from 'react-icons/tb';
import { LiaLinkedin } from 'react-icons/lia';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/luckycoding-lab', icon: TbBrandGithub },
//   { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shockinglucky/', icon: LiaLinkedin },
  { name: 'Email', url: 'mailto:lokeshrathor5929@gmail.com?subject=Hiring%20Inquiry%3A%20Web%20Developer%20%26%20Designer&amp;body=Hello%20Lokesh%2C%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20you%20for%20a%20project%20related%20to%20[Web%20Development%2FDesign%2FGraphic%20Design%2C%20etc.].%0D%0A%0D%0APlease%20find%20my%20details%20below%3A%0D%0AName%3A%20[Your%20Name]%0D%0APhone%20Number%3A%20[Your%20Phone%20Number]%0D%0AEssential%20Details%3A%20[Project%20Scope%2FBudget%2FTimeline]%0D%0A%0D%0AI%20look%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20regards.', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="py-8 text-neutral-400">
      <div className="mx-auto flex  flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col gap-1 font-mono text-xs">
          <p className="font-semibold text-white">LUCKY</p>
          <p className="text-neutral-500">
            © {new Date().getFullYear()} • Built with React.js & Tailwind CSS
          </p>
        </div>

        {/* Right: Social Links Grid/Row */}
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-[#0c0c0e] px-2.5 py-1.5 text-xs font-medium text-neutral-400 transition-all hover:border-neutral-700 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{link.name}</span>
                <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}