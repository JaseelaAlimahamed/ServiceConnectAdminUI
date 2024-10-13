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
function Graph() {
  const data = [
    { name: "Jan", income: "100" },
    { name: "Feb", income: "200" },
    { name: "Mar", income: "250" },
    { name: "Apr", income: "200" },
    { name: "May", income: "150" },
    { name: "Jun", income: "200" },
    { name: "Jul", income: "250" },
    { name: "Aug", income: "450" },
    { name: "Sep", income: "600" },
    { name: "Oct", income: "680" },
    { name: "Nov", income: "690" },
    { name: "Dec", income: "730" },
  ];
  return (
    <>
      <div className="bg-white rounded-lg p-5 m-5 ">
        <div className="flex justify-between">
          {" "}
          <h1 className="text-xl font-bold text-blue-950 mb-5">Income</h1>{" "}
          <select className=" w-52 rounded-3xl h-16 border-violet border-2 text-violet text-xl font-semibold pl-14">
            {" "}
            <option value="jan">Monnth</option>{" "}
            <option value="jan"> Jan</option>
            <option value="feb"> Feb</option>
            <option value="mar" name="mar">
              {" "}
              Mar
            </option>
          </select>
        </div>

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
    </>
  );
}

export default Graph;
