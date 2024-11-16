import React from 'react'
import Card from '../../reUsableComponents/Card';
const AdminCard = () => {
    const cardConfigs = [
        {
          title: "962",
          subtitle: "Franchisee",
          iconBg: "bg-violet", 
          icon: <img src="/Teacher.svg" alt="" /> , 
        },
        {
          title: "962",
          subtitle: "Dealers",
          iconBg:"bg-orange" , 
          icon: <img src="/Student.svg" alt="" />, 
        },
        {
          title: "962",
          subtitle: "Service Providers",
          iconBg: "bg-yellow", 
          icon: <img src="/Calendar.svg" alt="" />, 
        },
        {
          title: "962",
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