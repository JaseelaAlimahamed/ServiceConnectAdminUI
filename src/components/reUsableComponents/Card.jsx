
import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { RiImageEditFill } from "react-icons/ri";

function Card({ variant = "small", ...rest }) {
  return (
    <div className="relative font-poppins rounded-[1.25rem] w-fit h-fit bg-white">
      {variant === "small" ? <SmallCard {...rest} /> : <LargeCard {...rest} />}
    </div>
  );
}

function SmallCard({ title, subtitle,iconBg }) {
  return (
    <div className="flex px-4 py-4 gap-4 items-center w-[12rem] h-[5.25rem]">
      <div
        className={`w-[2.5rem] aspect-square rounded-full flex justify-center items-center ${iconBg}`}
      >
        <RiImageEditFill color="white" size="1.25rem" />
      </div>

      <section className="flex flex-col">
        <span className="font-semibold text-lg">{title}</span>
        <span className="font-normal text-sm text-[#68676E]">{subtitle}</span>
      </section>
    </div>
  );
}
function LargeCard({ title, subtitle, date, time,sideColor, name }) {
  return (
    <>
      {sideColor && (
        <span
          className={`absolute top-0 left-0 w-[1.5rem] h-full rounded-s-[1.25rem] ${sideColor} `}
        ></span>
      )}
      <div
        className={`${
          sideColor ? "ml-8" : ""
        } px-4 py-4 flex flex-col gap-2 justify-center w-[26rem] text-[#A098AE]`}
      >
        <span className="font-semibold text-lg text-dark_blue">{title}</span>
        <div className="flex gap-2 items-center">
          <div className="w-[2rem] aspect-square rounded-full bg-blue-200"></div>
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

export default Card;
