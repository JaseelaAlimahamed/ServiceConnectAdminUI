import React from 'react'

const TransactionCard = ({ title, subtitle, iconBg, icon ,additionalSubtitle}) => {
    
  return (
    <div  className="relative font-poppins rounded-[1.25rem] h-fit bg-primary flex ">
        <div className="flex px-5 py-6 gap-2 items-center w-[14rem]  ">
            <div
                className={`w-[3rem]  aspect-square rounded-full flex justify-center items-center ${iconBg}`}
            >
                {icon && <>{icon}</>}
            </div>

            <section className="flex flex-col w-full">
                <span className="font-normal text-sm text-[#68676E]">{subtitle}</span>
                <span className="font-extrabold text-xl text-violet">{title}</span>
                {additionalSubtitle && (
                    <span className="font-normal text-xs  text-[#68676E]">
                        {additionalSubtitle}
                    </span>
                )}
            </section>
        </div>
    </div>
  )
}

export default TransactionCard