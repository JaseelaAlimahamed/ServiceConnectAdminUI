import React from 'react'
import ServiceProviderManagement from "../../components/commonComponents/serviceProviderComponents/ServiceProviderManagement"
import ServiceProviderCards  from "../../components/commonComponents/serviceProviderComponents/ServiceProviderCards"


const ServiceProviderTable = () => {
  return (
    <div className='  pt-10 h-full'>
        <ServiceProviderCards />
        <ServiceProviderManagement/>
    </div>
  )
}

export default ServiceProviderTable