import React from 'react'
import AdsDropDown from './AdsDropDown'
import AdsCategories from './AdsCategories'
import AdsInputs from './AdsInputs'


const AdsType = () => {
  return (

    <div className='bg-blue_bg h-auto '>

      <div>
        <AdsDropDown/>
      </div>

      <div className='flex flex-col md:flex-row gap-10'>

        <div className='flex justify-center'>
          <div className='h-full w-full md:w-auto'><AdsCategories /></div>
        </div>
  
        <div className='h-full w-full'>
         <div>          
            <AdsInputs/>
         </div>
        </div>
  
      </div>
      </div>
  )
}

export default AdsType