import React from 'react'
import TransactionSummary from '../../../components/adminComponents/TransactionComponents/TransactionSummary'
import TransactionDetailView from '../../../components/adminComponents/TransactionComponents/TransactionDetailView'

const TransactionHistory = () => {
  return (
    <div className='bg-blue_bg p-6 h-screen flex flex-col gap-10'>
        <TransactionSummary/>
        <TransactionDetailView/>
    </div>
  )
}

export default TransactionHistory