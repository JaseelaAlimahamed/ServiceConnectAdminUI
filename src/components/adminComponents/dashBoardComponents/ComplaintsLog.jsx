import React from 'react'
import AdminTables from './AdminTables'

const ComplaintsLog = ({Complaints}) => {
    const complaintsLogData = [
        { paymentId: 'TX12345', date: '2023-10-12', time: '12:34 PM', paymentAmount: 250.00, paymentStatus: 'Complete' },
        { paymentId: 'TX12346', date: '2023-10-13', time: '01:15 PM', paymentAmount: 100.00, paymentStatus: 'Pending' },
        { paymentId: 'TX12347', date: '2023-10-14', time: '03:45 PM', paymentAmount: 350.00, paymentStatus: 'Cancelled' },
        { paymentId: 'TX12347', date: '2023-10-14', time: '03:45 PM', paymentAmount: 350.00, paymentStatus: 'Cancelled' },
        { paymentId: 'TX12347', date: '2023-10-14', time: '03:45 PM', paymentAmount: 350.00, paymentStatus: 'Cancelled' },
        { paymentId: 'TX12348', date: '2023-10-15', time: '02:10 PM', paymentAmount: 400.00, paymentStatus: 'Complete' }
    ];
  return (
    <div>
        <AdminTables
                        tableDataConfig={Complaints}
                        tableConfig={{ title: 'Complaints Log', type: 'complaintslog' }}
                    />
    </div>
  )
}

export default ComplaintsLog