import React from 'react'
import BusinessSidebar from './BusinessSidebar'
import BusinessDetail from './BusinessDetail'

const BusinessArea = () => {
  return (
    <div className='flex items-center justify-center min-h-[100dvh-100px] mt-24'>
        <div className='inline-flex gap-14'>
            <BusinessSidebar />
            <BusinessDetail />
        </div>
    </div>
  )
}

export default BusinessArea