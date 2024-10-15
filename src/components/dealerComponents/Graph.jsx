import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DropDown from "../reUsableComponents/DropDown";
function Graph({title,data}) {

  return (
    <>
      <div className="bg-white rounded-lg p-5 m-5  ">
        <div className="flex justify-between">
          {" "}
          <h1 className="text-xl font-bold text-blue-950 mb-5">{title}</h1>{" "}
          <select className=" w-52 rounded-3xl h-16 border-violet border-2 text-violet text-xl font-semibold pl-14 max-[980px]:w-40  max-[520px]:w-32 ">
            {" "}
            <option >Month</option>{" "}
            <option value="jan"> Jan</option>
            <option value="feb"> Feb</option>
            <option value="mar">
             
              Mar
            </option>
            <option value="apr">Apr</option>
            <option value="may">may</option>
            <option value="jun">jun</option>
            <option value="jul">july</option>
            <option value="aug">Aug</option>
            <option value="sep">Sep</option>
            <option value="oct">Oct</option>
            <option value="nov">Nov</option>
            <option value="dec">Dec</option>



          </select>
        </div>

        <div className=" overflow-scroll">


        <AreaChart
          width={1200}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          >
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>

          <Area
            type="monotone"
            dataKey="income"
            stroke="#FB7D5B"
            strokeWidth={3}
            fill="#FB7D5B"
            fillOpacity={"0.3"}
          />
        </AreaChart>
            </div>
      </div>
    </>
  );
}

export default Graph;
