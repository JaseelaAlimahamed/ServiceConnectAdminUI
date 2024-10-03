import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { RiImageEditFill } from "react-icons/ri";

function Card({ variant = "small", ...rest }) {
    let cardComponent;
    if (variant === "small") {
        cardComponent = <SmallCard {...rest} />;
    } else if (variant === "large") {
        cardComponent = <LargeCard {...rest} />;
    } else if (variant === "medium") {
        cardComponent = <TitleCard {...rest} />;
    }

    return (
        <div className="relative font-poppins w-56 rounded-[1.25rem] h-fit bg-white">
            {cardComponent}
        </div>
    );
}

function SmallCard({ title, subtitle, iconBg, icon }) {
    return (
        <div className="flex px-5 py-6 gap-2  items-center w-[14rem] h-[5.25rem] ">
            <div
                className={`w-[2.5rem] aspect-square rounded-full flex justify-center items-center ${iconBg}`}
            >
                {icon && <>{icon}</>}
            </div>

            <section className="flex flex-col">
                <span className="font-normal text-sm text-[#68676E]">{subtitle}</span>
                <span className="font-extrabold text-xl text-violet">{title}</span>
            </section>
        </div>
    );
}
function LargeCard({
    title,
    titleSize = "text-lg",
    subtitle,
    date,
    time,
    sideColor,
    name,
}) {
    return (
        <>
            {sideColor && (
                <span
                    className={`absolute top-0 left-0 w-[1.5rem] h-full rounded-s-[1.25rem] ${sideColor} `}
                ></span>
            )}
            <div
                className={`${sideColor ? "ml-8" : "mr-8"
                    } px-4 py-5 flex flex-col gap-2 justify-center text-[#A098AE]`}
            >
                <span className={`font-semibold ${titleSize} text-dark_blue`}>
                    {title}
                </span>
                <div className="flex gap-2 items-center">
                    {name && (
                        <div className="w-[2rem] aspect-square rounded-full bg-blue_gray"></div>
                    )}
                    <span className="font-normal text-sm">{name}</span>
                </div>
                <span className="font-normal text-sm">{subtitle}</span>
                {date && (
                    <div className="flex gap-2">
                        <IoCalendarClearOutline color="orange" />
                        <span className="font-normal text-sm">{date}</span>
                    </div>
                )}
                {time && (
                    <div className="flex gap-2">
                        <LuClock3 color="#FCC43E" />
                        <span className="font-normal text-sm">{time}</span>
                    </div>
                )}
            </div>
        </>
    );
}

function TitleCard({ title, subtitle }) {
    return (
        <>
            <div className="mr-8 px-8 py-8 flex flex-col gap-2 justify-center text-[#A098AE]">
                <span className="font-bold text-2xl text-dark_blue">
                    {title}
                </span>
                <span className="font-normal text-sm">{subtitle}</span>
            </div>
        </>
    );
}

export default Card;
