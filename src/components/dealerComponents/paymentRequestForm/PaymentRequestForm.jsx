import React, { useState } from 'react';
import InputFieldComponent from '../../reUsableComponents/InputFieldComponent';
import ReUsableModal from '../../reUsableComponents/ReUsableModal';
import {paymentData} from  "../../../service/api/dealer/PostApi"

const fields = [
    { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Enter full name' },
    { label: 'Email Address', name: 'emailAddress', type: 'email', placeholder: 'Enter email' },
    { label: 'Contact Number', name: 'contactNumber', type: 'text', placeholder: 'Enter contact number' },
    { label: 'Payment Amount', name: 'paymentAmount', type: 'text', placeholder: 'Enter amount' },
    { label: 'Bank Name', name: 'bankName', type: 'text', placeholder: 'Enter bank name' },
    { label: 'Account Holder Name', name: 'accountHolderName', type: 'text', placeholder: 'Enter account holder name' },
    { label: 'Account Number', name: 'accountNumber', type: 'text', placeholder: 'Enter account number' },
    { label: 'Bank Branch', name: 'bankBranch', type: 'text', placeholder: 'Enter branch' },
    { label: 'IFSC Code', name: 'ifscCode', type: 'text', placeholder: 'Enter IFSC code' },
];

const PaymentRequestForm = () => {
    const [formData, setFormData] = useState({
        fullName: '', emailAddress: '', contactNumber: '', paymentAmount: '', paymentMethod: '',
        bankName: '', accountHolderName: '', accountNumber: '', bankBranch: '', ifscCode: '',
        supportingDocuments: null,
    });

    const [documentName, setDocumentName] = useState('No file chosen');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (field, value) => setFormData((prevData) => ({ ...prevData, [field]: value }));

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleInputChange('supportingDocuments', file);
        setDocumentName(file ? file.name : 'No file chosen');
    };

    const validateForm = () => fields.every(({ name }) => formData[name]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) setIsModalOpen(true);
        else console.error('Validation failed: Fill in all fields.');
    };

    // const handleConfirm = async () => {
    //     setIsModalOpen(false);
    //     try {
    //         await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock async
    //         console.log("Form submitted:", formData);
    //     } catch (error) {
    //         console.error("Submission failed:", error);
    //     }
    // };

    const prepareSubmissionData = () => ({
        amount: formData.paymentAmount,
        description: "Payment Request", // If not provided by the form, set a default
        phone: formData.contactNumber,
        email: formData.emailAddress,
        payment_method: formData.paymentMethod,
        account_holder_name: formData.accountHolderName,
        account_number: formData.accountNumber,
        bank_branch: formData.bankBranch,
        bank_name: formData.bankName,
        ifsc_code: formData.ifscCode,
    });
    

    const handleConfirm = async () => {
        setIsModalOpen(false);
    
        const submissionData = prepareSubmissionData(); // Prepare mapped data
    
        try {
            const response = await paymentData(submissionData);
            console.log("Form submitted successfully:", response.data);
        } catch (error) {
            console.error("Submission failed:", error.response?.data || error.message);
        }
    };
    
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue_bg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-2/3 lg:w-1/2 p-12 bg-white rounded-2xl shadow-xl m-8">
                {fields.map(({ label, name, type, placeholder }) => (
                    <div key={name} className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                        <InputFieldComponent
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            value={formData[name]}
                            onChange={(e) => handleInputChange(name, e.target.value)}
                            color="border border-light_gray h-10 rounded-md"
                        />
                    </div>
                ))}

                {/* Payment Method */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                    <select
                        value={formData.paymentMethod}
                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                        className={`p-2 pl-3 w-full rounded-md border border-light_gray h-10 ${formData.paymentMethod === '' ? 'text-light_gray' : 'text-black'
                            }`}
                        required
                    >
                        <option value="" disabled hidden>Select method</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="upi">UPI</option>
                        <option value="wallet">Wallet</option>
                    </select>
                </div>

                {/* Supporting Documents */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Supporting Documents</label>
                    <div className="relative">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <input
                            type="text"
                            value={documentName}
                            className={`border border-light_gray p-2 rounded-md w-full h-10 ${documentName === 'No file chosen' ? 'text-light_gray' : 'text-black'
                                }`}
                            readOnly
                            placeholder="Choose File"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="md:col-span-2 flex justify-end mt-4">
                    <button
                        type="reset"
                        onClick={() => {
                            setFormData({
                                fullName: '', emailAddress: '', contactNumber: '', paymentAmount: '', paymentMethod: '',
                                bankName: '', accountHolderName: '', accountNumber: '', bankBranch: '', ifscCode: '',
                                supportingDocuments: null,
                            });
                            setDocumentName('No file chosen');
                        }}
                        className="bg-lite_red text-white rounded-full mr-2 w-48 h-8"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="bg-id_gray text-white rounded-full w-48 h-8">Confirm</button>
                </div>
            </form>

            <ReUsableModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                heading="Confirm Payment Request"
                message={(
                    <div>
                        {fields.map(({ label, name }) => (
                            <p key={name}><strong>{label}:</strong> {formData[name]}</p>
                        ))}
                        <p><strong>Supporting Document:</strong> {documentName}</p>
                    </div>
                )}
                confirm={true}
                confirm_label="Confirm"
                cancel={true}
                cancel_label="Cancel"
                onConfirm={handleConfirm}
            />
        </div>
    );
};

export default PaymentRequestForm;