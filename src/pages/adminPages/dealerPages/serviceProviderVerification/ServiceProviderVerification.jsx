import ServiceProviderProfile from "../../../../components/dealerComponents/ServiceProviderVerification/ServiceProviderProfile"
import AnalyticsComponent from '../../../../components/dealerComponents/ServiceProviderVerification/AnalyticsComponent'

const ServiceProviderVerification = () => {
  return (
    <div className='flex justify-center items-center h-full flex-col gap-5 bg-blue_bg'>
        <ServiceProviderProfile 
            name="Karen Hope"
            username="Plumber"
            franchise="K Top"
            address="Jakartra,Indonesia"
            phone="+12 34567 890"
            email="hope@gmail.com"
  
        />
        <AnalyticsComponent />
    </div>
  )
}

export default ServiceProviderVerification