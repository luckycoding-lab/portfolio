export default function SocialMedia() {
    return (
        <div>
            <div className="text-sm text-gray-600">Where to find me <span className="text-white">(digitally)</span> if you wish to</div>
            <div className='flex flex-col py-4'>
                <div className="flex w-full min-w-0 flex-wrap items-center justify-start gap-4 sm:flex-nowrap">
                    {/* 1. Status / Availability Button */}
                    <a
                        href="mailto:lokeshrathor5929@gmail.com?subject=Hiring%20Inquiry%3A%20Web%20Developer%20%26%20Designer&amp;body=Hello%20Lokesh%2C%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20you%20for%20a%20project%20related%20to%20[Web%20Development%2FDesign%2FGraphic%20Design%2C%20etc.].%0D%0A%0D%0APlease%20find%20my%20details%20below%3A%0D%0AName%3A%20[Your%20Name]%0D%0APhone%20Number%3A%20[Your%20Phone%20Number]%0D%0AEssential%20Details%3A%20[Project%20Scope%2FBudget%2FTimeline]%0D%0A%0D%0AI%20look%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20regards."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-btn"
                    >
                        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.875 4.5H4.125c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V6.375c0-1.036-.84-1.875-1.875-1.875Z"></path>
                            <path d="M5.25 7.5 12 12.75l6.75-5.25"></path>
                        </svg>

                        <span>Email Me</span>

                        {/* <FaLinkedinIn className="ml-0.5 h-3.5 w-3.5 text-[#8ab4f8]" /> */}
                    </a>

                    {/* 2. Download CV Button */}
                    <a
                        href="https://github.com/luckycoding-lab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-btn"
                    >
                        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 6.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                            <path d="M7.5 21.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                            <path d="M7.5 17.25V6.75"></path>
                            <path d="M16.5 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                            <path d="M16.5 9.75c0 6-9 2.25-9 7.5"></path>
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shockinglucky/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-btn"
                    >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2v1.05ZM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-1 2h2V21H4V8.5Z"></path>
                        </svg>
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://www.instagram.com/shocking.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-btn"
                    >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703 2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.91 2.91 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4Zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Z"></path>
                        </svg>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
