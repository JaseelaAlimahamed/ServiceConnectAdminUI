import React from 'react'
import AdminTables from './AdminTables';

const InCompleteBookings = () => {
    const incompletedBookingsData = [
        { id: 1, userImage: 'https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg', paymentAmount: 250.00, userName: 'John Doe' },
        { id: 2, userImage: '/user2.jpg', paymentAmount: 250.00, userName: 'Jane Smith' },
        { id: 3, userImage: '/user3.jpg', paymentAmount: 250.00, userName: 'Alice Johnson' },
        { id: 4, userImage: '/user4.jpg', paymentAmount: 250.00, userName: 'Bob Brown' },
        { id: 5, userImage: '/user5.jpg', paymentAmount: 250.00, userName: 'Charlie Wilson' },
        { id: 6, userImage: '/user6.jpg', paymentAmount: 250.00, userName: 'Daniel Green' }
    ];
    
  return (
    <div>
        <AdminTables
                        tableDataConfig={incompletedBookingsData}
                        tableConfig={{ title: 'Incompleted Bookings', type: 'incompletedbookings' }}
                    />
    </div>
  )
}

export default InCompleteBookings