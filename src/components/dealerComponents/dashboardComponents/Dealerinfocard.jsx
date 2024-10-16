import React from "react";
import { FaPerson } from "react-icons/fa6";

function Dealerinfocard({ title, number, percentage, type }) {
  if (type === "Infocard") {
    return (
      <Infocard
        title={title}
        number={number}
        percentage={percentage}
      ></Infocard>
    );
  }
  if ((type = "Pendingcard")) {
    return <Pending></Pending>;
  }
}
function Infocard({ title, number, percentage }) {
  return (
    <div className="bg-white w-[30%] h-[120px] rounded-lg flex items-center max-[1100px]:w-[70%] max-[410px]:w-[90%]">
      <div className={ percentage > 0 ? 'bg-violet flex items-center justify-center  text-2xl text-white size-14 rounded-full ml-[5%]' : `  bg-orange flex items-center justify-center  text-2xl text-white size-14 rounded-full ml-[5%]`}>
        {" "} 
        <FaPerson></FaPerson>{" "}
      </div>
      <div className="ml-[3%]">
        <p className="text-light_gray">{title}</p>
        <p className="text-blue-900 text-2xl font-bold" >{number}</p>
        <p  className="text-light_gray" >
          <span className={ percentage > 0  ?  'text-green-500 font-semibold' :`text-orange font-semibold`}   > { percentage}% </span>
              than last month
        </p>
      </div>
    </div>
  );
}
function Pending() {
  return (
    <div className="bg-white w-[20em] h-[15em]  rounded-xl max-[1100px]:mt-5  max-[1100px]:ml-[15%]  max-[500px]:w-[15em]   ">
      <div className="mt-[25%] ml-[20%] ">
        <h1 className="text-lg font-semibold text-blue-950">
          Pending verificaion
        </h1>{" "}
        <div className=" flex items-center gap-2  ">
          {" "}
          <div className="bg-violet size-14 rounded-full flex items-center justify-center">
            {" "}
            <FaPerson className="text-white text-2xl"></FaPerson>{" "}
          </div>{" "}
          <h1 className="text-xl font-bold text-blue-950">32</h1>{" "}
        </div>
      </div>
    </div>
  );
}

export default Dealerinfocard;
