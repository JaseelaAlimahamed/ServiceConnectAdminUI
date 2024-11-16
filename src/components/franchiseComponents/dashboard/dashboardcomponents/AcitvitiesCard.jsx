
import { Calendar } from 'lucide-react';
import { Clock } from 'lucide-react';
function ActivitesCard({bg}){
    
    return(


<div className="bg-white p-4 text-sm relative rounded-lg shadow-lg  mt-3">
    <div className={ `w-5 h-full ${bg} absolute -left-4 top-0 rounded-tl-full rounded-bl-full`}></div>
<h3 className="text-sm mb-0  font-poppins text-dark_blue font-bold">Tap Repair</h3>
<div className=' flex gap-5'>
    <div className=' flex gap-3'>
        <div><Calendar/></div>
        <div>March 10</div>
    </div>
    <div className=' flex gap-3'>
        <div><Clock/></div>
        <div>9 am - 10 pm</div>

    </div>


</div>
<div className=' mt-3 flex gap-20 w-20 h-20 bg-id_gray rounded-full'>
    <div>

    <img src="" alt="Profile" />
    </div>
    <div className=' mt-3'>
        <p>Name</p>
        <p className=' mt-2' >Work</p>

    </div>
</div>

</div>

    )
}

export default ActivitesCard;
