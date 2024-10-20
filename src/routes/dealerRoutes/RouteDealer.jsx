import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealerLayout from '../../layouts/DealerLayout'
// import ForgotPasswordPage from '../../pages/dealerPages/ForgotPasswordPage'
import ForgotPassword from '../../components/dealerComponents/ForgotPassword/ForgotPassword'
// import Dashboard from '../../pages/dealerPages/Dashboard'
// import ServieProviderManagment from '../../pages/dealerPages/ServieProviderManagment'
// import ServieProvider from '../../pages/dealerPages/ServieProvider'
// import ServieProviderVarication from '../../pages/dealerPages/ServieProviderVaricationForm'
// import PaymentRequestForm from '../../pages/dealerPages/PaymentRequestForm'
import SignInForm from '../../pages/adminPages/SignInPages/SignInForm.jsx'

export default function RouteDealer() {
    return (
        <Routes >
            <Route path='/' element={<ForgotPassword />} />
            <Route element={<DealerLayout />} >
                <Route path='/' element={<Dashboard />} />
                <Route path='/ServiesProviderManagment' element={<ServieProviderManagment />} />
                <Route path='/ServiesProviderVerication' element={<ServieProvider />} />
                <Route path='/ServiesProviderVaricationForm' element={<ServieProviderVarication />} />
                <Route path='/PaymentRequestForm' element={<PaymentRequestForm />} />
            </Route>
        </Routes>
    )
}
