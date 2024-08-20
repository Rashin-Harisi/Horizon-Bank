import BoxTitle from '@/components/BoxTitle'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const PaymentTransfer = async() => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;
  
  return (
    <section className='payment-transfer'>
      <BoxTitle title='Payment Transfer'
        subtext='Please provide any specific details or notes related to the payment transfer' />
      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData}/>
      </section>
    </section>
  )
}

export default PaymentTransfer