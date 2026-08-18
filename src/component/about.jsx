import { FaCloudDownloadAlt, FaWhatsapp } from 'react-icons/fa';
// import profileImg from '../assets/theluckydesign profile.png';
import profileImg from '../assets/Llogo.png';
export default function About() {
    return (
        <div className="pt-14">
            {/* items-center replaces align-middle for flex centering */}
            <div className="flex items-center gap-3">
                {/* Standard w-16 h-16 (64px) + object-cover */}
                <img
                    src={profileImg}
                    alt="Profile"
                    className="h-16 w-16 rounded-full object-cover shadow-sm"
                />

                <div className="flex flex-col">
                    <h2
                        className="text-2xl font-bold tracking-widest text-white uppercase"
                        style={{ fontFamily: "'Silkscreen', monospace" }}
                    >LUCKY
                    </h2>
                    <span className="font-mono text-xs text-neutral-500">
                        @shocking.tech
                    </span>
                </div>
            </div>
            <div className="py-3 text-sm font-mono space-y-3">
                <p className="py-1 text-gray-400">
                    Hello! I'm <span className="text-white">Lucky (Lokesh Kumar)</span>, a
                    passionate <span className="text-white">Full-Stack Developer & UI/UX Designer</span> focused on
                    building <span className="text-white">intuitive</span>,{' '}
                    <span className="text-white">high-performance</span>, and{' '}
                    <span className="text-white">user-centered</span> digital experiences.
                </p>

                <p className="py-1 text-gray-400">
                    My expertise lies in taking projects from{' '}
                    <span className="text-white">concept to fully functional applications</span>,
                    combining clean design sensibilities with{' '}
                    <span className="text-white">robust technical execution</span>. I build modern frontends using{' '}
                    <span className="text-white">React, TypeScript, and Tailwind CSS</span>, and develop scalable backends using{' '}
                    <span className="text-white">Node.js, Express, and MongoDB / SQL</span>.
                </p>

                <p className="py-1 text-gray-400">
                    This portfolio showcases a selection of projects where I've applied these
                    skills to solve{' '}
                    <span className="text-white">real-world development and design challenges</span>. Take a
                    look at my work below!
                </p>
            </div>
            <div className='flex flex-col'>
                <div className="flex w-full min-w-0 flex-wrap items-start justify-start gap-4 sm:flex-nowrap">
                    {/* 1. Status / Availability Button */}
                    <a
                        href="https://wa.me/917042181503?text=Hello%20Lokesh%2C%20I%27d%20like%20to%20hire%20you%20for%20a%20project%21%0A%0AMy%20Name%20is%3A%20%5BYour%20Name%5D%0A%0AMy%20Email%20is%3A%20%5BYour%20Email%20Address%5D%0A%0AProject%20Type%20(Web%20Dev%2FDesign%2FGraphic%20Design)%3A%0A%0ABrief%20Project%20Details%3A%20%5Be.g.%2C%20website%20redesign%2C%20logo%20creation%2C%20new%20app%5D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-btn"
                    >
                        {/* Animated Pulsing Dot */}
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dcf8c6] opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25d366]" />
                        </span>

                        <span>Available for new opportunities</span>

                        <FaWhatsapp className="ml-0.5 h-3.5 w-3.5 text-[#25d366]" />
                    </a>

                    {/* 2. Download CV Button */}
                    <a
                        href="/public/Lucky Resume 2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-btn"
                    >
                        <FaCloudDownloadAlt className="h-3.5 w-3.5 text-neutral-400" />
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    );
}