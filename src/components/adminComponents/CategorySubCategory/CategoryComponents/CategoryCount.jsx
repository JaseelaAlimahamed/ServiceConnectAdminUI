import React from 'react'
import { ImUserTie } from 'react-icons/im'
import { LiaUserTieSolid } from 'react-icons/lia'
import Card from '../../../reUsableComponents/Card'

const CategoryCount = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:justify-normal md:justify-normal xl:justify-normal  lg:flex-row md:flex-row xl:flex-row gap-10 mb-8">
        {/* Small fixed width for cards to prevent full-width expansion */}
        <div className="flex-grow-0 flex-shrink-0 w-[12rem]">
          <Card
            variant="small"
            title="932"
            subtitle="Categories"
            iconBg="bg-dark_blue"
            icon={<ImUserTie style={{color:'white'}} />}
          />
        </div>

        <div className="flex-grow-0 flex-shrink-0 w-[12rem]">
          <Card
            variant="small"
            title="468"
            subtitle="Sub-Categories"
            iconBg="bg-orange"
            icon={<LiaUserTieSolid  style={{color:'white'}} />}           
          />
        </div>
       
      </div>
  )
}

export default CategoryCount