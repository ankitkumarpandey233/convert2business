import React from 'react'

const BusinessNavbar = () => {
    const idea = "Eco-Friendly Packaging Solutions Eco-Friendly Packaging Solutions Eco-Friendly Packaging Solutions";
  return (
    <div className="flex items-center gap-5 sm:gap-[1000px] justify-between bg-base-100 px-5 py-3 sm:px-8 sm:py-5">
        <div className="truncate font-lilita text-[#a18072] ml-3 border-2 border-gray-900 rounded-xl p-4 sm:ml-5 text-base sm:text-3xl">
            {idea.toLocaleUpperCase()}
        </div>
        <a href='/dashboard' className="text-2xl sm:text-5xl border-2 rounded-full border-gray-600 px-2 py-2 sm:px-2 sm:py-4">
            😎
        </a>
    </div>
  )
}

export default BusinessNavbar