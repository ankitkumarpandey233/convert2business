import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 px-5 py-3 sm:px-8 sm:py-5">
            <div className="flex-1">
                <div className="text-3xl sm:text-5xl border-2 rounded-full border-gray-600 px-1 py-2 sm:px-2 sm:py-4">
                    😎
                </div>
                <h2 className="font-lilita ml-3 sm:ml-5 text-[#a18072] text-lg sm:text-4xl">
                    GOOD MORNING , DHIRAJ MOHATA
                </h2>
            </div>
            <div className="flex-none ">
                <button className="txt-xl sm:text-4xl font-lilita border-2 rounded-xl shadow-lg px-4 py-3 border-gray-600 hover:border-b-8 hover:border-r-8 hover:bg-gray-300 ">GENERATE</button>
            </div>
        </div>
    )
}

export default NavBar