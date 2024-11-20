
import { Calendar } from 'lucide-react';
import { Clock } from 'lucide-react';
function ActivitesCard({bg,data}){
    console.log(data)
    const dateObject = new Date(data.date);
    
    return(


<div className="bg-white p-4 text-sm relative rounded-lg shadow-lg  mt-3">
    <div className={ `w-5 h-full ${bg} absolute -left-4 top-0 rounded-tl-full rounded-bl-full`}></div>
<h3 className="text-sm mb-0  font-poppins text-dark_blue font-bold">{data.title}</h3>
<div className=' flex gap-5'>
    <div className=' flex gap-3'>
        <div><Calendar/></div>
        <div>{dateObject.toISOString().split('T')[0]}</div>
    </div>
    <div className=' flex gap-3'>
        <div><Clock/></div>
        <div>{dateObject.toISOString().split('T')[1].split('Z')[0]}</div>

    </div>


</div>
<div className=' mt-3 flex gap-20 w-20 h-20 bg-id_gray rounded-full'>
    <div>

    <img src="" alt="Profile" />
    </div>
    <div className=' mt-3'>
        <p>{data.service_provider}</p>
        <p className=' mt-2' >{data.type}</p>

    </div>
</div>

</div>

    )
}

export default ActivitesCard;
