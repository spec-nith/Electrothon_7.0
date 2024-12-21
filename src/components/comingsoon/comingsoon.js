"use client"; // Add this at the top to enable client-side rendering

import { useState, useEffect } from "react";
import Head from "next/head";

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Set your target date here
    const targetDate = new Date("2025-02-05T23:59:59").getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <>
            <Head>
                <title>Coming Soon</title>
                <meta name="description" content="Our website is coming soon. Stay tuned!" />
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-transparent text-white text-center">
                <div className="max-w-lg p-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                    <p className="text-lg mb-6">
                        We're working hard to launch our website. Stay tuned for updates!
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="text-center">
                            <p className="text-3xl font-bold">{timeLeft.days}</p>
                            <p className="text-sm text-gray-400">Days</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold">{timeLeft.hours}</p>
                            <p className="text-sm text-gray-400">Hours</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold">{timeLeft.minutes}</p>
                            <p className="text-sm text-gray-400">Minutes</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold">{timeLeft.seconds}</p>
                            <p className="text-sm text-gray-400">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComingSoon;
