import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { RiImageEditFill } from "react-icons/ri";



function Activitycard({ type,name,subtitle,title,date,time,status}) {
  console.log(title)
  if (type == "Activitycard") {
    return <Activity title={title} date={date} time={time} name={name} subtitle={subtitle} status={status}></Activity>;
  }
  if (type == "Titlecard") {
    return <Titlecard title={title} date={date}></Titlecard>;
  }


}
function Activity({name,subtitle,title,date,time,status}) {
  return (
    <div className="bg-white w-[10em] h-[9em] rounded-2xl flex  ">

      {status === "Active" &&      <div className={`bg-violet  w-[8%]    h-full rounded-l-xl max-[1372px]:w-[5%]  `}></div> }
      {status === "Pending" &&      <div className={`bg-dark_yellow   w-[8%]    h-full rounded-l-xl max-[1372px]:w-[5%]  `}></div> }
      {status === "Disable" &&      <div className={`bg-orange  w-[8%]    h-full rounded-l-xl max-[1372px]:w-[5%]  `}></div> }
      
      <div>
        <div className="ml-3 mt-2">
          <h1 className="text-xl font-semibold text-blue-950">
          {title}
          </h1>
          <div className="flex gap-5">
           
            <div className="flex items-center gap-2 text-light_gray">
            
              <IoCalendarClearOutline className="text-soft_red" />
              <p style={{fontSize:"12px"}}> {date}</p>
            </div>
            <div className="flex items-center gap-2">
             
              <LuClock3 className="text-dark_yellow" /> <p className="text-light_gray" style={{fontSize:"12px"}}>{time}</p>
            </div>
          </div>
          <div className="flex mt-2">
      
            <div className="bg-blue_gray size-10 rounded-full"></div>
            <div className="ml-2">
           
              <p className="text-light_gray" style={{fontSize:"13px"}}>{name}</p> <p className="text-light_gray" style={{fontSize:"12px"}}>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Titlecard({title,date}) {
  return (
    <div className="bg-white w-[10em] h-[9em] rounded-2xl py-6  px-5">
      <h1 className="text-blue-950 text-xl font-bold" style={{fontSize:"15px"}}>{title}</h1>
      <h2 className="text-light_gray" style={{fontSize:"13px"}}>{date}</h2>
    </div>
  );
}
export default Activitycard;
