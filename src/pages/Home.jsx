import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <section className="h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-[#333] md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl text-indigo-600 font-medium font-lilita ">
                        got an idea convert it
                    </h1>
                    <h2 className="text-4xl sm:text-6xl lg:text-8xl font-lilita mb-1 sm:mb-2 text-gray-800">
                        WELCOME TO I2B
                    </h2>
                    <p className="max-w-2xl mx-auto text-base font-comic sm:text-xl lg:text-2xl p-10 text-muted-foreground mb-4">
                        OUR WORK IS TO HELP OUR USER CONVERT <br /> THEIR IDEAS INTO BUSINESS'S.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a
                            href="/auth"
                            target=""
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-lilita justify-center py-4 px-6 text-xl md:text-2xl text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                        >
                            LET'S GET STARTED
                        </a>
                    </div>


                </div>
                <div className="mt-14 flex justify-center">
                    <img
                        src="/my-page-screenshot.png"
                        className="w-full max-w-5xl border border-gray-300 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                        alt="Screenshot of My Page"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
