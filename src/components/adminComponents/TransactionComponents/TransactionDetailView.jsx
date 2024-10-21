import React from 'react'
import TransactionTable from './TransactionTable';

const TransactionDetailView = () => {
    const transactionData = [
        {
            transactionId: "FRDLSEIZ01",
            date: "2021-03-25",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Active",
        },
        {
            transactionId: "FRDLSEIZ02",
            date: "2021-03-25",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Active",
        },
        {
            transactionId: "FRDLSEIZ03",
            date: "2021-03-25",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Active",
        },
        {
            transactionId: "FRDLSEIZ04",
            date: "2021-03-28",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Active",
        },
        {
            transactionId: "FRDLSEIZ05",
            date: "2021-03-25",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Complete",
        },
        {
            transactionId: "FRDLSEIZ06",
            date: "2021-03-25",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Active",
        },
        {
            transactionId: "FRDLSEIZ07",
            date: "2021-03-25",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Active",
        },
        {
            transactionId: "FRDLSEIZ08",
            date: "2021-03-25",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Active",
        },
        {
            transactionId: "FRDLSEIZ09",
            date: "2021-03-28",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Active",
        },
        {
            transactionId: "FRDLSEIZ10",
            date: "2021-03-25",
            type: "Ad",
            description: "Ad Posted",
            from: "R01A01S1002",
            to: "R01A01S1002",
            amount: "20001",
            status: "Complete",
        },
       
    ];
  return (
    <div>
      <TransactionTable 
      tableDataConfig={transactionData}/>
    </div>
  )
}

export default TransactionDetailView