import React, { useState } from "react";
import FormInput from "../../components/reUsableComponents/FormInput";

function PaymentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    paymentAmount: "",
    paymentMethod: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankBranch: "",
    supportingDocuments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="form-container m-auto mt-6 font-poppins"
      style={{
        padding: "2rem",
        maxWidth: "800px",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}
      >
        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          color="#000"
        />
        <FormInput
          label="Email Address"
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          value={formData.email}
          onChange={handleChange}
          color="#000"
        />
        <FormInput
          label="Contact Number"
          name="contactNumber"
          placeholder="9895453621"
          value={formData.contactNumber}
          onChange={handleChange}
          color="#000"
        />
        <FormInput
          label="Payment Amount"
          placeholder="₹100/-"
          name="paymentAmount"
          value={formData.paymentAmount}
          onChange={handleChange}
          color="#000"
        />

          <FormInput
          label="Payment Method"
            type="select"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            options={["Credit Card", "Debit Card", "Net Banking", "UPI"]}
          color="#000"
          />


        <FormInput
          label="Bank Name"
          name="bankName"
          placeholder="Canera Bank"
          value={formData.bankName}
          onChange={handleChange}
          color="#000"
        />
        <FormInput
          label="Account Holder Name"
          name="accountHolderName"
          placeholder="John Doe"
          value={formData.accountHolderName}
          color="#000"
          onChange={handleChange}
        />
        <FormInput
          label="Account Number"
          placeholder="6548525247986"
          name="accountNumber"
          color="#000"
          value={formData.accountNumber}
          onChange={handleChange}
        />
        <FormInput
          label="IFSC Code"
          placeholder="CNRB0001458"
          name="ifscCode"
          color="#000"
          value={formData.ifscCode}
          onChange={handleChange}
        />
        <FormInput
          label="Bank Branch"
          placeholder="Eranakulam"
          name="bankBranch"
          color="#000"
          value={formData.bankBranch}
          onChange={handleChange}
        />
        <FormInput
          color="#000"
          label="Supporting Documents"
          placeholder="Documents"
          name="supportingDocuments"
          value={formData.supportingDocuments}
          onChange={handleChange}
        />

        <div className="flex flex-col md:flex-row justify-end gap-4"
          style={{
            flex: "1 1 100%",
          }}
        >
          <button
            type="button" className="bg-red text-white px-16 py-2 rounded-full"
          >
           Cancel
          </button>
          <button
            type="submit" className="bg-[#4b0082] text-white px-16 py-2 rounded-full"

          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
