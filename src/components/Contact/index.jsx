import { useEffect, useState } from "react";

export default function ClientContactView() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;



    return (
        <div className="max-w-screen-xl sm:mt-14 sm:mb-14 px-6 sm:px-8 mb-6 mx-auto mt-24" id="reviews">
            {/* Section Header */}
            <div className="relative flex flex-col items-center justify-center min-h-[150px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[300px] my-10">
                <h1 className="absolute text-[12vw] lg:text-9xl font-bold text-gray-800 opacity-20 leading-none whitespace-nowrap">
                    Contact Me
                </h1>
                <h2 className="absolute text-[5vw] sm:text-2xl md:text-4xl lg:text-5xl text-yellow-400 leading-none whitespace-nowrap">
                    Contact Me
                </h2>
                <div className="relative mt-30 sm:bottom-0 w-16 h-1 bg-gray-400 mx-auto">
                    <div className="absolute w-8 h-1 bg-amber-500"></div>
                </div>
            </div>

        </div>
    );
}
