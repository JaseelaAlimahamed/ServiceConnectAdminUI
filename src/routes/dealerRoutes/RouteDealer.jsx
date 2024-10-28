import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DealerLayout from '../../layouts/DealerLayout'
import ForgotPassword from '../../pages/dealerPages/ForgotPasswordPage.jsx'
 import DealerSignIn from '../../pages/dealerPages/DealerSignIn.jsx'
import DealerDashboard from '../../pages/dealerPages/DealerDashboard.jsx'
import ServieProviderManagment from '../../pages/dealerPages/ServiceProviderManagement.jsx'
import ServieProviderVarication from '../../pages/dealerPages/ServiceProviderVerification.jsx'
import ServieProviderVaricationForm from '../../pages/dealerPages/ServiceProviderVerificationForm.jsx'
import PaymentRequestPage from '../../pages/dealerPages/PaymentRequestPage.jsx'
import DealerProfile from '../../pages/dealerPages/DealerProfilePage.jsx';
import DealerSideFranchiseDetails from '../../pages/dealerPages/DealersideFranchiseeDetails.jsx'
import TransactionHistory from '../../pages/dealerPages/TransactionHistory'
import NotificationManagement from '../../pages/dealerPages/NotificationManagement'

export default function RouteDealer() {
    return (
        <Routes > 
            <Route path='/Sign-In' element={<DealerSignIn/>} /> 
            <Route path='/forgot-Password' element={<ForgotPassword />} />
            <Route element={<DealerLayout />} >
                <Route path='/dashboard' element={<DealerDashboard />} />
                <Route path='/profile' element={<DealerProfile />} />
                <Route path='/Servies-Provider-Managment' element={<ServieProviderManagment />} />
                <Route path='/Servies-Provider-Verification/:id' element={<ServieProviderVarication />} />
                <Route path='/Servies-Provider-Varication-Form' element={<ServieProviderVaricationForm />} />
                <Route path='/Payment-RequestForm' element={<PaymentRequestPage />} />
                <Route path='/franchisee' element={<DealerSideFranchiseDetails />} />
                <Route path='/finance' element={<TransactionHistory />} />
                <Route path='/notificaiton' element={<NotificationManagement />} />
                
            </Route>    
        </Routes>
    )
}
