
import React from "react";
import { XAxis, Tooltip, CartesianGrid, ResponsiveContainer, YAxis, AreaChart, Area, Legend } from "recharts";
import { FaDotCircle } from "react-icons/fa";

const data = [
  { name: "Jan", income: 30, expense: 50 },
  { name: "Feb", income: 60, expense: 20 },
  { name: "Mar", income: 39, expense: 60 },
  { name: "Apr", income: 40, expense: 30 },
  { name: "May", income: 20, expense: 50 },
  { name: "Jun", income: 60, expense: 40 },
  { name: "Jul", income: 75, expense: 68 },
  { name: "Aug", income: 50, expense: 75 },
  { name: "Sep", income: 65, expense: 50 },
  { name: "Oct", income: 50, expense: 30 },
  { name: "Nov", income: 60, expense: 50 },
  { name: "Dec", income: 55, expense: 20 },
];

const BalanceAnalytics = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full mx-auto">
        <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-lg font-bold text-[#303972]">Balance Analytics</h2>

            <div className="flex justify-center items-center md:gap-4 md:space-x-4">

            <select className="border rounded-3xl text-sm text-[#4D44B5] border-[#4D44B5] md:py-2 md:px-6">
                <option>Month</option>
                <option>Year</option>
            </select>
            </div>

        </div>

        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FB7D5B" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FB7D5B" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FCC43E" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FCC43E" stopOpacity={0}/>
              </linearGradient>
            </defs>

                <XAxis dataKey="name" strokeWidth={0}  />
                <YAxis strokeWidth={0} hide={true} />

                <Tooltip
                  contentStyle={{backgroundColor:'#4D44B5', border:'1px', borderRadius:'5px', padding:'10px', position:'sticky'}}
                  itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                  labelStyle={{ color: '#fff', fontSize: '14px' }}
                  cursor={{ stroke: '#4D44B5', strokeWidth: 2 }}
                  allowEscapeViewBox={{x:true}}
                />

                <Legend 
                  layout="horizontal"
                  align="right"
                  verticalAlign="top"
                  iconType="disk"
                  wrapperStyle={{ paddingBottom: '10px', fontSize: '14px' }}
                  payload={[
                      { id: 'pv', value: 'Expense', type: 'dotcircle', color: '#FCC43E'},
                      { id: 'uv', value: 'Income', type: 'disc', color: '#FB7D5B'},
                    ]}
                />
                
                <CartesianGrid stroke="#ccc" horizontal={false} />

                <Area type="monotone" dataKey="income" stroke="#FB7D5B" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="expense" stroke="#FCC43E"strokeWidth={3} fillOpacity={1} fill="url(#colorPv)" />

            </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default BalanceAnalytics;
