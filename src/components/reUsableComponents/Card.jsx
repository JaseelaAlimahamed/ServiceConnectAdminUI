import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LiaUserTieSolid } from "react-icons/lia";
import { LuClock3 } from "react-icons/lu";
import { RiImageEditFill } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";

function Card({ variant = "small", ...rest }) {
  let cardComponent;
  if (variant === "small") {
    cardComponent = <SmallCard {...rest} />;
  } else if (variant === "large") {
    cardComponent = <LargeCard {...rest} />;
  } else if (variant === "medium") {
    cardComponent = <TitleCard {...rest} />;
  } else if (variant === "ads") {
    cardComponent = <AdsCard {...rest} />;
  } else if (variant === "adstype") {
    cardComponent = <AdsType {...rest} />;
  }

  return (
    <div className="relative font-poppins rounded-[1.25rem] bg-white w-full">
      {cardComponent}
    </div>
  );
}

function SmallCard({ title, subtitle, iconBg, icon }) {
  return (
    <div className="flex px-4 py-4 gap-4 items-center w-[14rem] h-[5.25rem]">
      <div
        className={`w-[3rem] aspect-square rounded-full flex justify-center items-center ${iconBg}`}
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
        <span className="font-bold text-2xl text-dark_blue">{title}</span>
        <span className="font-normal text-sm">{subtitle}</span>
      </div>
    </>
  );
}
function AdsCard({ heading, title, subtitle, iconBg, percent }) {
  const numericPercent = parseFloat(percent);
  const percentColor = numericPercent > 0 ? "text-green-500" : "text-red";
  return (
    <>
      <div className="flex gap-4 px-4 py-4 items-center max-w-[300px]">
        <div
          className={`w-[3rem] h-[3rem] rounded-full flex justify-center items-center ${iconBg}`}
        >
          <LiaUserTieSolid size="2rem" color="white" />
        </div>
        <section className="flex flex-col">
          <span className="text-light_gray font-normal text-base">{heading}</span>
          <span className="font-bold text-dark_blue text-2xl">{title}</span>
          <span className="font-normal text-base text-light_gray">
            {percent !== undefined && (
              <span className={percentColor}>{percent}</span>
            )}
            {subtitle}
          </span>
        </section>
      </div>
    </>
  );
}

function AdsType({ type, title, ad_id, views, hits }) {
  return (
    <>
      <div className="w-[22.5rem] h-[8.3rem] flex max-md:w-[19rem]">
        <div className="bg-black w-[8.125rem] h-full rounded-s-2xl "></div>
        <div className="bg-blue_bg w-[14.375rem] h-full rounded-e-2xl">
          <div className="px-2 py-2 flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <h2 className="font-bold text-[0.75rem] text-orange">{type}</h2>
              <FiEdit size={"1.25rem"} />
              <span className="ml-16">
                <SiTicktick color="green" />
              </span>
            </div>
            <h1 className="font-semibold text-base text-[#202244]">{title}</h1>
            <h2 className="font-medium text-base text-[#797C7B]">{ad_id}</h2>
            <div className="flex gap-7 justify-center">
              <span className="font-bold text-xs text-[#202244]">
                {views} Views
              </span>
              <span className="font-bold text-xs text-[#202244]">|</span>
              <span className="font-bold text-xs text-[#202244]">
                {hits} Hits
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
