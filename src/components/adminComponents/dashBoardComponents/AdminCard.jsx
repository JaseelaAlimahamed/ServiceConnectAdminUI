import React from 'react'
import Card from '../../reUsableComponents/Card';
const AdminCard = ({Total_Franchisees,Total_Dealers,Total_Service_Providers,total_customers}) => {
    const cardConfigs = [
        {
          title: Total_Franchisees,
          subtitle: "Franchisee",
          iconBg: "bg-violet", 
          icon: <img src="/Teacher.svg" alt="" /> , 
        },
        {
          title: Total_Dealers,
          subtitle: "Dealers",
          iconBg:"bg-orange" , 
          icon: <img src="/Student.svg" alt="" />, 
        },
        {
          title: Total_Service_Providers,
          subtitle: "Service Providers",
          iconBg: "bg-yellow", 
          icon: <img src="/Calendar.svg" alt="" />, 
        },
        {
          title: total_customers,
          subtitle: "Users",
          iconBg: "bg-dark_blue", 
          icon: <img src="/food.svg" alt="" />, 
        },
      ];
  return (
    <div className='bg-primary rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 py-4 xl:px-12'>
    {cardConfigs.map((data, index) => (
        <Card
            key={index}
            variant='small'
            title={data.title}
            subtitle={data.subtitle}
            icon={data.icon}
            iconBg={data.iconBg}
        />
    ))}
</div>

  )
}

export default AdminCard