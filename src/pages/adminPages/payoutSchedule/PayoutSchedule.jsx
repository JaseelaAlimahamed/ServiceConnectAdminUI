import React from 'react'

import PaymentScheduleTable from '../../../components/payoutScheduleComponent/PaymentScheduleTable'
import PayoutInputForm from '../../../components/payoutScheduleComponent/PayoutInputForm'
const PayoutSchedule = () => {

    

   
   
  return (

    <div className='bg-blue_bg   container mx-auto p-6 bg-gray-50 min-h-screen  '>
      
          {/* Payment Schedule Table */}
          <div className='flex justify-center items-center'>
          <div className="w-full md:w-4/12 lg:w-2/3 ">
          <PaymentScheduleTable/>
          </div>
          </div>

          {/* Payment Input Form  */}
          <div className='flex justify-center items-center'>
          <div className="w-full md:w-4/12 lg:w-2/3  ">
          <PayoutInputForm/>
          </div>
          </div>
      
    </div>
  )

  
}

export default PayoutSchedule
