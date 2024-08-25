import React from 'react'

const BusinessDetail = () => {
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
    <div>
      <h2 className='font-lilita text-[#a18072] text-4xl'>{section[2].title.toLocaleUpperCase()}</h2>
      <div className='w-[700px] h-[500px] border-2 p-5 border-gray-800 rounded-xl mt-3 overflow-y-auto scrollbar-hide'>
        {section.map((item, index) => (
          <div key={index} className='mb-4'>
            <h2 className='font-sans font-normal text-4xl'>{item.title}</h2>
            <p className='mt-2'>{item.description}</p>
          </div>
        ))}
      </div>
      <button className='border-2 font-lilita hover:bg-gray-200 border-gray-600 rounded-xl mt-7 text-3xl py-3 px-4'>
        NEXT
      </button>
    </div>
  )
}

export default BusinessDetail