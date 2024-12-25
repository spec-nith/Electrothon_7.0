import ComingSoon from "../comingsoon/comingsoon";
import { Pirata_One } from "next/font/google";

const pirataOne = Pirata_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export default function ThemeSection() {
    return (
        <section
            id="theme"
            className="relative w-full min-h-screen flex flex-col items-center justify-start pt-10 sm:pt-16 md:pt-8 lg:pt-8 pb-16 md:pb-0 lg:pb-0"
        >
            {/* Title */}
            <h2
                className={`${pirataOne.className} text-5xl sm:text-6xl md:text-7xl text-center text-white mb-8 sm:mb-10 md:mb-12 lg:mb-12 w-[80%] sm:w-[70%] md:w-[60%]`}
                style={{
                    textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
                }}
            >
                Themes
            </h2>

            {/* Coming Soon */}
            <ComingSoon />
        </section>
    );
}
