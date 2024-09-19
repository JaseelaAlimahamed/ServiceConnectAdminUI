import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';

const Graph = ({ type, data, Xaxis, line = [], style }) => {
  const colors = ['#FB7D5B', '#FCC43E'];
  const lineColors = ['#2D045F', '#7C9CF5'];
const lavender='#A098AE'
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="none" stroke={lavender} />
            <XAxis dataKey={Xaxis} axisLine={false} stroke='#000' />
            <YAxis stroke='#000' axisLine={false} />
            <Tooltip />
            <defs>
              {
                line.map((para, index) => (
                  <linearGradient key={index} id={`lineGradient${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors[index % colors.length]} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={colors[index % colors.length]} stopOpacity={0} />
                  </linearGradient>
                ))
              }
            </defs>
            {
              line.map((para, index) => (
                <Line key={index} type="monotone" dataKey={para} stroke={lineColors[index % lineColors.length]} strokeWidth={1} fill={`url(#lineGradient${index})`} />
              ))
            }
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="none" stroke={lavender} />
            <XAxis dataKey={Xaxis} axisLine={false} stroke={lavender} />
            <YAxis stroke={lavender} />
            <Tooltip />
            {
              line.map((bar, index) => (
                <Bar key={index} dataKey={bar} fill={colors[index % colors.length]} />
              ))
            }
          </BarChart>
        );
      case 'area':
        return (
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="none" horizontal={false} stroke={lavender}/>
            <XAxis dataKey={Xaxis} axisLine={false} stroke={lavender}/>
            <YAxis stroke={lavender}/>
            <Tooltip />
            <defs>
              {
                line.map((area, index) => (
                  <linearGradient key={index} id={`gradient${index}`} x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor={colors[index % colors.length]} stopOpacity={0.8} />
                    <stop offset='95%' stopColor={colors[index % colors.length]} stopOpacity={0} />
                  </linearGradient>
                ))
              }
            </defs>
            {
              line.map((area, index) => (
                <Area key={index} type="monotone" dataKey={area} stroke={colors[index % colors.length]} strokeWidth={5} fill={`url(#gradient${index})`} />
              ))
            }
          </AreaChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className='container mx-auto flex justify-center items-center my-20' style={style}>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
