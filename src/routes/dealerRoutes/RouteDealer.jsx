import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import DealerLayout from '../../layouts/DealerLayout'
import ForgotPassword from '../../pages/dealerPages/ForgotPasswordPage.jsx'
// import SignIn from '../../pages/dealerPages/SignInPages/SignInForm.jsx'
// import Dashboard from '../../pages/dealerPages/Dashboard'
// import ServieProviderManagment from '../../pages/dealerPages/ServieProviderManagment'
// import ServieProvider from '../../pages/dealerPages/ServieProvider'
// import ServieProviderVarication from '../../pages/dealerPages/ServieProviderVaricationForm'
// import PaymentRequestForm from '../../pages/dealerPages/PaymentRequestForm'
// import DealerProfile from '../../pages/dealerPages/DealerProfile';
// import DealerSideFranchiseDetails from '../../pages/dealerPages/DealerSideFranchiseDetails'
// import TransactionHistory from '../../pages/dealerPages/TransactionHistory'

export default function RouteDealer() {
    return (
        <Routes >
            {/* <Route path='/Sign-In' element={<SignIn/>} /> */}
            <Route path='/forgot-Password' element={<ForgotPassword />} />
            {/* <Route element={<DealerLayout />} > */}
                {/* <Route path='/' element={<DealerLayout />} />
                <Route path='/profile' element={<DealerProfile />} />
                <Route path='/Servies-Provider-Managment' element={<ServieProviderManagment />} />
                <Route path='/Servies-Provider-Verication' element={<ServieProvider />} />
                <Route path='/Servies-Provider-Varication-Form' element={<ServieProviderVarication />} />
                <Route path='/Payment-RequestForm' element={<PaymentRequestForm />} />
                <Route path='/Dealer-Franchise' elament={<DealerSideFranchiseDetails />} />
                <Route path='/finance' elament={<TransactionHistory />} />
                 */}
            {/* </Route>     */}
        </Routes>
    )
}
