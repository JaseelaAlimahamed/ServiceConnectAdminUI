import React, { useState } from 'react';
import InputFieldComponent from '../../reUsableComponents/InputFieldComponent';
import Modal from '../../reUsableComponents/reUsableModal';

const PaymentRequestForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        emailAddress: '',
        contactNumber: '',
        paymentAmount: '',
        paymentMethod: '',
        bankName: '',
        accountHolderName: '',
        accountNumber: '',
        bankBranch: '',
        ifscCode: '',
        supportingDocuments: null,
    });

    const [documentName, setDocumentName] = useState('No file chosen');
    const [isModalOpen, setIsModalOpen] = useState(true); // Modal state

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            supportingDocuments: selectedFile,
        }));
        setDocumentName(selectedFile ? selectedFile.name : 'No file chosen');
    };

    const validateForm = () => {
        const requiredFields = [
            'fullName', 'emailAddress', 'contactNumber',
            'paymentAmount', 'paymentMethod',
            'bankName', 'accountHolderName', 'accountNumber', 'bankBranch', 'ifscCode'
        ];

        for (const field of requiredFields) {
            if (!formData[field]) {
                return false; // Return false if any field is missing
            }
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            console.error('Validation failed: Please fill in all required fields.');
            return;
        }

        setIsModalOpen(true); // Open the confirmation modal after validation
    };

    const handleConfirm = async () => {
        setIsModalOpen(false); // Close modal when confirmed

        try {
            // Simulate a request or submission
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock async operation, replace with actual API call

            // Log the form data to the console
            console.log("Form submitted successfully:", formData);
        } catch (error) {
            console.error("Form submission failed:", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue_bg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-2/3 lg:w-1/2 p-12 bg-white rounded-2xl shadow-xl m-8">
                {/* Full Name */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <InputFieldComponent
                        type="text"
                        placeholder="Enter full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* Email Address */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <InputFieldComponent
                        type="email"
                        placeholder="Enter email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* Contact Number */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                    <InputFieldComponent
                        type="text"
                        placeholder="Enter contact number"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* Payment Amount */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount</label>
                    <InputFieldComponent
                        type="text"
                        placeholder="Enter amount"
                        name="paymentAmount"
                        value={formData.paymentAmount}
                        onChange={(e) => handleInputChange('paymentAmount', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* Payment Method */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                    <select
                        value={formData.paymentMethod}
                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                        className={`p-2 pl-3 w-full rounded-md focus:outline-none focus:ring-0 border border-light_gray h-10 ${
                            formData.paymentMethod === '' ? 'text-light_gray' : 'text-black'
                        }`}
                        required
                    >
                        <option value="" disabled hidden>Select method</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="paypal">PayPal</option>
                        <option value="crypto">Cryptocurrency</option>
                    </select>
                </div>

                {/* Bank Name */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                    <InputFieldComponent
                        type="text"
                        placeholder="Enter bank name"
                        name="bankName"
                        value={formData.bankName}
                        onChange={(e) => handleInputChange('bankName', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* Account Holder Name */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                    <InputFieldComponent
                        type="text"
                        placeholder="Enter account holder name"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* Account Number */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <InputFieldComponent
                        type="text"
                        placeholder="Enter account number"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* Bank Branch */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Branch</label>
                    <InputFieldComponent
                        type="text"
                        placeholder="Enter branch"
                        name="bankBranch"
                        value={formData.bankBranch}
                        onChange={(e) => handleInputChange('bankBranch', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* IFSC Code */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                    <InputFieldComponent
                        type="text"
                        placeholder="Enter IFSC code"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                        color="border border-light_gray h-10 rounded-md"
                    />
                </div>

                {/* Supporting Documents */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Supporting Documents</label>
                    <div className="relative">
                        <input
                            type="file"
                            name="supportingDocuments"
                            onChange={handleFileChange}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <input
                            type="text"
                            value={documentName}
                            className="border border-light_gray text-light_gray p-2 rounded-md w-full h-10"
                            readOnly
                            placeholder="Choose File"
                        />
                    </div>
                </div>
                
                {/* Buttons */}
<div className="md:col-span-2 flex justify-end items-center mt-4">
    <button
        type="reset"
        onClick={() => setFormData({})}
        className="bg-lite_red text-white rounded-full mr-2 w-48 h-8"
    >
        Cancel
    </button>
    <button
        type="submit"
        className="bg-id_gray text-white rounded-full w-48 h-8"
    >
        Confirm
    </button>
</div>

            </form>

            {/* Confirmation Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                heading="Confirm Payment Request"
                message={(
                    <div>
                        <p><strong>Full Name:</strong> {formData.fullName}</p>
                        <p><strong>Email Address:</strong> {formData.emailAddress}</p>
                        <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
                        <p><strong>Payment Amount:</strong> {formData.paymentAmount}</p>
                        <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
                        <p><strong>Bank Name:</strong> {formData.bankName}</p>
                        <p><strong>Account Holder Name:</strong> {formData.accountHolderName}</p>
                        <p><strong>Account Number:</strong> {formData.accountNumber}</p>
                        <p><strong>Bank Branch:</strong> {formData.bankBranch}</p>
                        <p><strong>IFSC Code:</strong> {formData.ifscCode}</p>
                        <p><strong>Supporting Document:</strong> {documentName}</p>
                    </div>
                )}
                confirm={true} // This is a confirmation modal
                confirm_label="Confirm"
                cancel={true}
                cancel_label="Cancel"
                onConfirm={handleConfirm} // Call handleConfirm when the button is clicked
            />
        </div>
    );
};

export default PaymentRequestForm;
