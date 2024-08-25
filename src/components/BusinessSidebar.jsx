import React from 'react'

const BusinessSidebar = () => {
  const section = [
    {
      title: 'Business Plan',
      description: 'A business plan is a written document that describes in detail how a business—usually a startup—defines its objectives and how it is to go about achieving its goals.'
    },
    {
      title: 'Market Research',
      description: 'Market research is the process of determining the viability of a new service or product through research conducted directly with potential customers.'
    },
    {
      title: 'Financial Plan',
      description: 'A financial plan is a comprehensive evaluation of an individual’s current pay and future financial state by using current known variables to predict future income, asset values and withdrawal plans.'
    },
    {
      title: 'Business Model',
      description: 'A business model is a company’s plan for making a profit. It identifies the products or services the business plans to sell, its target market, and any anticipated expenses.'
    }
  ]
  return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className='font-lilita  text-[#a18072] text-4xl'>BUSINESS PLAN</h2>
        <ul className='border-2 mt-3 border-gray-700 rounded-xl p-5 h-[500px] overflow-y-auto scrollbar-hide'>
            {section.map((item, index) => (
            <li key={index} className='font-comic font-bold p-3 sm:p-5 gap-5 hover:bg-indigo-100 hover:border-b-4 sm:gap-9 rounded-xl items-center flex justify-between w-full border-2 border-gray-400 mb-2 text-base sm:text-xl'>
                <a href='/business' className='truncate' >
                {item.title}
                </a>
                <button className='border-2 border-gray-300 rounded-xl text-xs sm:text-sm p-1'>
                🗑️
                </button>
            </li>
            ))}
        </ul>
        <button className='border-2 font-lilita hover:bg-gray-200 border-gray-600 rounded-xl mt-7 text-3xl p-3'>
            SAVE THE IDEA
        </button>
    </div>
  )
}

export default BusinessSidebar