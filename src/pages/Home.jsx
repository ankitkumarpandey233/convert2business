import React from 'react'

const Home = () => {
    return (
        <div class="flex flex-col items-center justify-center min-h-[100dvh] bg-[#fff] text-[#333]">
            <div class="max-w-[900px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
                <h1 class="text-4xl sm:text-6xl lg:text-8xl font-lilita mb-1 sm:mb-2">WELCOME TO I2B</h1>
                <p class="text-base font-comic sm:text-xl lg:text-2xl p-10 text-muted-foreground mb-4">
                    OUR WORK IS TO HELP OUR USER CONVERT <br /> THERE IDEAS INTO BUSINESS'S.
                </p>
                <a
                    class="inline-flex items-center font-lilita justify-center h-24 px-10 py-8 rounded-xl border-4 border-gray-900 bg-white text-gray-950 text-xl shadow-sm hover:bg-slate-100 sm:text-3xl"
                    href="/auth"
                >
                    LET'S GET STARTED
                </a>
            </div>
        </div>
    )
}

export default Home