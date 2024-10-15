import React from 'react';
import ServiceCardIcon from '../../../assets/icons/ServiceCardIcon.svg'

const CardsComponent = () => {
    const cardData = [
        {
            title: "Total Jobs",
            value: 932,
            change: 10,
            changeType: "positive"
        },
        {
            title: "Active Jobs",
            value: 754,
            change: -0.5,
            changeType: "negative"
        },
        {
            title: "Completed Jobs",
            value: 754,
            change: -0.5,
            changeType: "negative"
        }
    ];

    return (
        <div className="p-3 flex flex-col items-center justify-center lg:flex-row gap-3">
            {cardData.map((card, index) => (
                <div key={index} className="bg-white w-[300px] h-[100px] lg:w-[250px] lg:h-[100px] p-6 rounded-lg shadow-md text-center flex items-center">
                    {/* Icon Section */}
                
    
                    <div
                        className={`rounded-full p-3 flex items-center justify-center ${
                            card.change < 0 ? 'bg-orange' : 'bg-[#4D44B5]'
                        } mr-4`}
                    >
                        <img src={ServiceCardIcon} alt="Service card Icon" className="h-10 w-10" />   

                    </div>

                    {/* Text Section */}
                    <div className="text-left">
                        <p className="mt-2 text-[12px] font-normal leading-[14px] text-[#A098AE] font-poppins">{card.title}</p>
                        <p className="text-[30px] font-bold leading-[45px] text-[#303972] font-poppins">{card.value}</p>
                        <p className={`text-sm mb-2 ${card.changeType === 'positive' ? 'text-green-500' : 'text-red'}`}>
                            {card.change}%
                            <span className={card.changeType === 'positive' ? 'text-[#A098AE]' : 'text-[#A098AE]'}>
                                {card.changeType === 'positive' ? ' than last month' : ' less than last month'}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsComponent;
