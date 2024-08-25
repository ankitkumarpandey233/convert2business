import React from 'react'
import Idea from './idea'

const Ideas = () => {
    const ideas = [
        'Eco-Friendly Packaging Solutions',
        'AI-Powered Personal Finance Management',
        'Subscription Box for Gourmet Foods',
        'Online Platform for Freelance Creatives',
        'Virtual Reality Fitness Experiences',
        'Customized Meal Planning and Delivery Service',
        'Sustainable Fashion and Apparel Line',
        'Smart Home Automation and Security Systems',
        'Health and Wellness Coaching App',
        'Elderly Care and Assistance Technology',
      ];
      
  return (
    <div className='flex flex-col items-center justify-center p-12 sm:p-16 min-h-[100dvh-100px] bg-[#fff] text-[#333]'>
        <div className='font-lilita mb-5 sm:mb-10 sm:ml-5 text-2xl sm:text-5xl'>
            YOUR BUSINESS'S : 
        </div>
        <div className="border-2 border-gray-500 w-80 sm:w-[800px] p-4 rounded-xl h-80 sm:h-[500px] overflow-y-auto scrollbar-hide">
            {ideas.map((idea , index) => (
                <Idea text={idea} />
            ))}
        </div>

    </div>
  )
}

export default Ideas