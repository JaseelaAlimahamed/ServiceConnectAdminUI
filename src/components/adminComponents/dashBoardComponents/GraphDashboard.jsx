import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, Legend } from 'recharts';

const GraphDashboard = ({ type, data, Xaxis, line = [], pieData = [], isDonut, style }) => {
  const colors = ['#FB7D5B', '#FCC43E'];
  const lineColors = ['#2D045F', '#7C9CF5'];
  const lavender = '#A098AE';
  
  // Pie chart and Donut chart colors
  const pieColors = ['#6F4FF2', '#FF4550', '#C1BBEB']; // Regular pie chart colors
  const donutColors = ['#6F4FF2', '#E0E0E0']; // Donut chart colors for Active/Inactive

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
              {line.map((para, index) => (
                <linearGradient key={index} id={`lineGradient${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors[index % colors.length]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={colors[index % colors.length]} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            {line.map((para, index) => (
              <Line key={index} type="monotone" dataKey={para} stroke={lineColors[index % lineColors.length]} strokeWidth={1} fill={`url(#lineGradient${index})`} />
            ))}
          </LineChart>
        );
        
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="none" stroke={lavender} />
            <XAxis dataKey={Xaxis} axisLine={false} stroke={lavender} />
            <YAxis stroke={lavender} />
            <Tooltip />
            {line.map((bar, index) => (
              <Bar key={index} dataKey={bar} fill={colors[index % colors.length]} />
            ))}
          </BarChart>
        );
        
      case 'area':
        return (
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="none" horizontal={false} stroke={lavender} fill='#fff' />
            <XAxis dataKey={Xaxis} axisLine={false} stroke={lavender} />
            <YAxis stroke={lavender} />
            <Tooltip />
            <defs>
              {line.map((area, index) => (
                <linearGradient key={index} id={`gradient${index}`} x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor={colors[index % colors.length]} stopOpacity={0.8} />
                  <stop offset='95%' stopColor={colors[index % colors.length]} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            {line.map((area, index) => (
              <Area key={index} type="monotone" dataKey={area} stroke={colors[index % colors.length]} strokeWidth={5} fill={`url(#gradient${index})`} />
            ))}
          </AreaChart>
        );
        
      case 'pie': 
        return (
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              innerRadius={isDonut ? 50 : 0} 
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={isDonut ? donutColors[index % donutColors.length] : pieColors[index % pieColors.length]} 
                />
              ))}
            </Pie>
            <Tooltip />
            {isDonut && <Legend verticalAlign="bottom" height={36} />} 
          </PieChart>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className='container mx-auto flex justify-center items-center my-5' style={style}>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default GraphDashboard;
