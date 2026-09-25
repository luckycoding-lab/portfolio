import { GitHubCalendar } from 'react-github-calendar';

export default function GithubContributions() {
    // Custom dark-mode color theme for the activity blocks
    const customTheme = {
        dark: [
            '#18181b', // 0: Empty slot (matches your dark card)
            '#3b1c78', // 1: Low
            '#5b21b6', // 2: Medium-low
            '#7c3aed', // 3: Medium-high
            '#8b5cf6', // max activity (your accent color)
        ],
    };

    return (
        <section className="w-full py-8 text-neutral-100">
            <div className="mx-auto px-4 sm:px-0">

                {/* Header */}
                <div className="mb-2 flex items-baseline gap-3">
                    <h2
                        className="text-2xl font-bold tracking-widest text-white uppercase"
                        style={{ fontFamily: "'Silkscreen', monospace" }}
                    >
                        Activity
                    </h2>
                    <span className="font-mono text-xs text-neutral-500">
                        git_contributions.log
                    </span>
                </div>

                <p className="mb-6 font-mono text-xs leading-relaxed text-neutral-400 sm:text-sm">
                    Real-time activity log fetched directly from{' '}
                    <a
                        href="https://github.com/luckycoding-lab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#ff3576] hover:underline"
                    >
                        @luckycoding-lab
                    </a>
                    .
                </p>

                {/* Calendar Card Wrapper */}
                <div className="overflow-x-auto no-scrollbar rounded-xl border border-[#27272a] bg-[#0c0c0e] shadow-lg">
                    <div className="min-w-162.5 font-mono text-xs">
                        <GitHubCalendar
                            username="luckycoding-lab"
                            colorScheme="dark"
                            theme={customTheme}
                            blockSize={12}
                            blockMargin={4}
                            fontSize={12}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}