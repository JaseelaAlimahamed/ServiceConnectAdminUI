import React from 'react'
import ServiceProviderManagement from "../../components/adminComponents/serviceProviderComponents/ServiceProviderManagement"
import ServiceProviderCards  from "../../components/adminComponents/serviceProviderComponents/ServiceProviderCards"


const ServiceProviderTable = () => {
  return (
    <div>
        <ServiceProviderCards />
        <ServiceProviderManagement/>
    </div>
  )
}

export default ServiceProviderTable