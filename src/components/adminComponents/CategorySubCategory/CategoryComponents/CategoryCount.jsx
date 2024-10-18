import React from 'react'
import { ImUserTie } from 'react-icons/im'
import { LiaUserTieSolid } from 'react-icons/lia'
import Card from '../../../reUsableComponents/Card'

const CategoryCount = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-10 mb-8">
       
        <div  className="lg:w-[13rem]">
          <Card
            variant="small"
            title="932"
            subtitle="Categories"
            iconBg="bg-dark_blue"
            icon={<ImUserTie style={{color:'white'}} />}
          />
        </div>

        <div className="lg:w-[13rem]">
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