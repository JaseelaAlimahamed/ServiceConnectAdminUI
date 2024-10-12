import React from 'react';

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
        <div className="p-3 flex flex-col lg:flex-row gap-3">
            {cardData.map((card, index) => (
                <div key={index} className="bg-white w-[300px] h-[100px] lg:w-[250px] lg:h-[100px] p-6 rounded-lg shadow-md text-center flex items-center">
                    {/* Icon Section */}
                
    
                    <div
                        className={`rounded-full p-3 flex items-center justify-center ${
                            card.change < 0 ? 'bg-orange' : 'bg-[#4D44B5]'
                        } mr-3`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
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
