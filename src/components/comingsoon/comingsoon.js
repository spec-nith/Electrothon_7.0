import React from 'react';

const ComingSoon = () => {
    return (
        <div className="flex items-center justify-center h-[4cm] w-[7cm] bg-cover bg-center relative text-white border rounded-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center p-2">
                <h1 className="text-xl font-bold md:text-2xl">Coming Soon</h1>
                <p className="mt-2 text-sm md:text-base">
                    We're working on this. Stay tuned!
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;