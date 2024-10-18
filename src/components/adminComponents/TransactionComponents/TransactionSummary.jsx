import React from 'react'
import TransactionCard from './TransactionCard';


const TransactionSummary = () => {

    const cardConfig = [
        {
            title: "932",
            subtitle: "Total Expense",
            additionalSubtitle: "+10% than last month",
            iconBg: "bg-violet",
            icon: <img src="/Student.svg" alt="User Icon" className="w-6 h-6" />
        },
        {
            title: "754",
            subtitle: "Total Income",
            additionalSubtitle: "-0.5% than last month",
            iconBg: "bg-orange",
            icon: <img src="/Teacher.svg" alt="User Icon" className="w-6 h-6" />
        },
        {
            title: "754",
            subtitle: "Total Expenditure",
            additionalSubtitle: "-0.5% than last month",
            iconBg: "bg-orange",
            icon: <img src="/Teacher.svg" alt="User Icon" className="w-6 h-6" />
        }
    ];

    return (
        <div className='flex flex-col lg:flex-row  gap-10'>
            {cardConfig.map((card, index) => (
                <TransactionCard
                    title={card.title}
                    subtitle={card.subtitle}
                    additionalSubtitle={card.additionalSubtitle}
                    icon={card.icon}
                    iconBg={card.iconBg}
                />
            ))

            }
        </div>
    )
}

export default TransactionSummary