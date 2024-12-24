const ComingSoon = () => {
    return (
        <div className="flex items-center justify-center h-[15cm] w-[20cm] bg-cover bg-center relative text-white border rounded-lg">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center p-6">
                <h1 className="text-3xl font-bold md:text-4xl">Coming Soon</h1>
                <p className="mt-4 text-lg md:text-xl">
                    We're working on this. Stay tuned!
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;
