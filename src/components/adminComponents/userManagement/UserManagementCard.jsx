import React from 'react'

const UserManagementCard = ({item}) => {
    const {title, iconBg, count} = item
  return (
    <div key={title} className='flex md:w-[166px] w-[155px] bg-primary rounded-xl px-2 py-3'>
              <span className={`flex items-center justify-center h-10 w-10 mr-2 rounded-full ${iconBg}`}>
              <img src='/card-icon.svg' alt="card-icon" />
              </span>
              <div>
              <h2 className='font-bold mb-1'>{count}</h2>
              <p className='text-xs text-[#68676E]'>{title}</p>
              </div>
            </div>
  )
}

export default UserManagementCard