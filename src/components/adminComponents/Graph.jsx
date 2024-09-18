import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,BarChart, Bar, AreaChart, Area } from 'recharts';

const Graph = ({type,data,Xaxis,line=[]}) => {
 const colors=['#FB7D5B','#FCC43E']
 
const renderChart=()=>{
    switch(type){
        case 'line':
            return (
                <LineChart data={data} >
                <CartesianGrid strokeDasharray="none" horizontal={false}  stroke='#A098AE' />
                <XAxis dataKey={Xaxis} axisLine={false} stroke='#A098AE'/>
                <YAxis stroke='#A098AE'/>
               
               {
                  line.map((para,index)=>
                    <>
                   
                      <Line key={index} type="monotone" dataKey={para} stroke={colors[index%colors.length]} strokeWidth={5} dot={null} />
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
    <div className='container mx-auto flex justify-center items-center w-full h-96 my-20'>
      <ResponsiveContainer>
       {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
