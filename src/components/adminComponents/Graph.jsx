import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar, AreaChart, Area } from 'recharts';

const Graph = ({type,data,Xaxis,line=[],style}) => {
 const colors=['#FB7D5B','#FCC43E']
 const lineColors=['#2D045F','#7C9CF5']
 
const renderChart=()=>{
    switch(type){
        case 'line':
            return (
                <LineChart data={data} >
                <CartesianGrid strokeDasharray="none"   stroke='#A098AE' />
                <XAxis dataKey={Xaxis} axisLine={false} stroke='#000'/>
                <YAxis stroke='#000' axisLine={false}/>
               
               {
                  line.map((para,index)=>
                    <>
                   
                      <Line key={index} type="monotone" dataKey={para} stroke={lineColors[index%lineColors.length]} strokeWidth={1} />
                    </>
                  )
               }
                
              </LineChart>
            )
        case 'bar':
            return(
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="none"   stroke='#A098AE' />
                    <XAxis dataKey={Xaxis} axisLine={false} stroke='#A098AE'/>
                    <YAxis stroke='#A098AE'/>
                    {
                        line.map((bar,index)=>
                        <Bar key={index} dataKey={bar} fill={colors[index%colors.length]} />
                        )
                    }
                </BarChart>
            )
        case 'area':
            return(
                <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
           
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={data} />
          <YAxis />
          <Tooltip />
          {
            line.map((area,index)=>
                <Area type="monotone" dataKey={area} stackId="1" stroke={colors[index%colors.length]} fill='none' />

            )
          }
        </AreaChart>
            )    
        
    }

}
  return (
    <div className='container mx-auto flex justify-center items-center  my-20' style={style}>
      <ResponsiveContainer>
       {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
