import { useState, useEffect } from 'react';
export default function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    const hours = String(time.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    return (
        <div className='flex flex-wrap items-center justify-between px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4'>
            <div className="flex items-baseline gap-2 text-xs sm:text-sm md:text-sm text-[#fafafa] font-figtree">IN {`${hours}:${minutes}`}</div>
            <div className='flex'>
                <svg width="20" height="20" fill="white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657 13.414 20.9a1.997 1.997 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z"></path>
                    <path d="M14.121 13.121A3 3 0 1 0 9.88 8.88a3 3 0 0 0 4.242 4.242Z"></path>
                </svg>
                <div className='text-xs sm:text-sm md:text-sm text-[#fafafa] font-figtree'>&nbsp;New Delhi, India</div>
            </div>
        </div>
    );
}