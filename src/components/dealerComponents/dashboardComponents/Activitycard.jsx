import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { RiImageEditFill } from "react-icons/ri";
function Activitycard({ type,name,subtitle,title,date,time ,sidecolor}) {
  if (type == "Activitycard") {
    return <Activity title={title} date={date} time={time} name={name} subtitle={subtitle} sidecolor={sidecolor}></Activity>;
  }
  if (type == "Titlecard") {
    return <Titlecard></Titlecard>;
  }

  // return (

  //   <div>

  //   <div className='bg-white w-[100%] h-[100%]  rounded-xl flex max-[1372px]:w-[60%] max-[580px]:w-[80%]  max-[380px]:w-[95%]  '>

  //       <div className='bg-violet w-[8%]    h-full rounded-l-xl max-[1372px]:w-[5%]  '></div>
  //       <div className='mt-5 ml-5 mb-5'>
  //           <h1 className='text-xl font-semibold text-blue-950'>New service registraion</h1>
  //           <div className='flex gap-5'>  <div className='flex items-center gap-2'> <IoCalendarClearOutline className='text-soft_red'/>  <p> mar 20,2021</p> </div>   <div className='flex items-center gap-2'> <LuClock3 className='text-dark_yellow'/> <p>9:00 - 10:00 AM</p> </div>       </div>
  //         <div className='flex'>
  //         <div className="w-[4em] aspect-square rounded-full bg-blue_gray"></div>
  //         <div className='flex flex-col ml-5 font-semibold mt-3'> <p  >Rakhavan</p> <p>Tap work</p></div>

  //         </div>
  //       </div>

  //   </div>
  //   </div>
  // )
}
function Activity({name,subtitle,title,date,time,sidecolor }) {
  return (
    <div className="bg-white w-[20em] h-[9em] rounded-2xl flex  ">
      <div className={` ${sidecolor} w-[8%]    h-full rounded-l-xl max-[1372px]:w-[5%]  `}></div>
      <div>
        <div className="ml-5 mt-2">
          <h1 className="text-xl font-semibold text-blue-950">
          {title}
          </h1>
          <div className="flex gap-5">
           
            <div className="flex items-center gap-2 text-light_gray">
            
              <IoCalendarClearOutline className="text-soft_red" />
              <p> {date}</p>
            </div>
            <div className="flex items-center gap-2">
             
              <LuClock3 className="text-dark_yellow" /> <p className="text-light_gray">{time}</p>
            </div>
          </div>
          <div className="flex mt-2">
      
            <div className="bg-blue_gray size-14 rounded-full"></div>
            <div className="ml-2">
           
              <p className="text-light_gray">{name}</p> <p className="text-light_gray">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Titlecard() {
  return (
    <div className="bg-white w-[20em] h-[9em] rounded-2xl py-10  px-8">
      <h1 className="text-blue-950 text-xl font-bold">Recent Activities</h1>
      <h2 className="text-light_gray">Thursday,10th April ,2021</h2>
    </div>
  );
}
export default Activitycard;
