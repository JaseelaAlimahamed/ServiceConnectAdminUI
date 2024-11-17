
const ServiceProviderCards = () => {
    const cardConfig = [
        {title:"24K",subtitle:"Service Providers", iconBg:"bg-[#6F4FF2]"},
        {title:"82K",subtitle:"Verified", iconBg:"bg-[#50BB25]"},
        {title:"200",subtitle:"Verification Requests", iconBg:"bg-[#F9D62C]"}]

  return (
    <div className='flex flex-wrap gap-5 pb-10 mx-10'>
        {cardConfig.map((item,index)=>(
            <div key={index} className='flex w-56 bg-primary rounded-xl px-4 py-3'>
              <span className={`flex items-center justify-center h-14 w-14 mr-4 rounded-full ${item.iconBg}`}>
              <img src='/card-icon.svg' alt="" />
              </span>
              <div>
              <h2 className='text-lg font-bold mb-1'>{item.title}</h2>
              <p className='text-sm text-[#68676E]'>{item.subtitle}</p>
              </div>
            </div>
          ))}
    </div>
  )
}

export default ServiceProviderCards;