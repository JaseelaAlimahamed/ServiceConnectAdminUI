import React from 'react'

function Modal({isOpen , onClose  , data}) {

    if (!isOpen) return null ;

  return (
    <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-8 border border-black border-opacity-20 ">
        <div className='flex flex-col md:flex-row gap-8  '>
            <div className='bg-blue_gray rounded-lg h-40 w-52'>

            </div>
            <div className='flex flex-col gap-3 w-80'> 
                <div className='flex items-start justify-between '>
                    <div className='flex flex-col'>
                        <span className='font-bold text-dark_blue'>Name</span>
                        <span className='text-light_gray text-xs'>Id</span>
                    </div>
                    <div className='flex gap-3'>
                        <button className='text-dark_blue'>Edit</button>
                        <button className='text-red'>Delete</button>
                    </div>
                </div>
                <div className='text-sm text-light_gray text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati saepe ab sed numquam perferendis nam rem excepturi aperiam fuga temporibus consequatur rerum molestiae itaque id explicabo vero, nostrum hic.
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5 w-80 '>
            <div className='flex flex-col '>
                <span className='text-dark_blue font-bold'>About</span>
                <span className='text-sm text-light_gray text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quis blanditiis nobis aperiam? Asperiores molestiae, vel quis dolores quod maxime porro sint possimus delectus provident error eaque non voluptatibus veritatis?</span>
            </div>
            <div className='flex flex-col gap-4 '>
                <div>
                    <span className='text-dark_blue font-bold'>Contact</span>
                </div>
                <span className='text-sm text-light_gray'>Email : </span>
                <span className='text-sm text-light_gray'>Phone :</span>
                <span className='text-sm text-light_gray'>Address :</span>
            </div>
        </div>
        <button 
        onClick={onClose}
        className='bg-dark_blue text-white text-center font-semibold rounded-lg w-40 p-1'>Close</button>
      </div>
    </div>
  )
}

export default Modal