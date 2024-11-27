import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReUsableModal from "../../reUsableComponents/ReusableModal"
import { paymentData } from "../../../service/api/dealer/PostApi";

const fields = [
  { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter full name" },
  { label: "Email Address", name: "emailAddress", type: "email", placeholder: "Enter email" },
  { label: "Contact Number", name: "contactNumber", type: "text", placeholder: "Enter contact number" },
  { label: "Payment Amount", name: "paymentAmount", type: "text", placeholder: "Enter amount" },
  { label: "Bank Name", name: "bankName", type: "text", placeholder: "Enter bank name" },
  { label: "Account Holder Name", name: "accountHolderName", type: "text", placeholder: "Enter account holder name" },
  { label: "Account Number", name: "accountNumber", type: "text", placeholder: "Enter account number" },
  { label: "Bank Branch", name: "bankBranch", type: "text", placeholder: "Enter branch" },
  { label: "IFSC Code", name: "ifscCode", type: "text", placeholder: "Enter IFSC code" },
];

const validate = (values) => {
  const errors = {};

  if (!values.fullName) errors.fullName = "Full Name is required";
  if (!values.emailAddress) errors.emailAddress = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) errors.emailAddress = "Invalid email format";

  if (!values.contactNumber) errors.contactNumber = "Contact Number is required";
  else if (!/^[0-9]{10,}$/.test(values.contactNumber))
    errors.contactNumber = "Must be a number and at least 10 digits";

  if (!values.paymentAmount) errors.paymentAmount = "Amount is required";
  else if (isNaN(values.paymentAmount) || values.paymentAmount <= 0)
    errors.paymentAmount = "Must be a positive number";

  if (!values.bankName) errors.bankName = "Bank Name is required";
  if (!values.accountHolderName) errors.accountHolderName = "Account Holder Name is required";
  if (!values.accountNumber) errors.accountNumber = "Account Number is required";
  else if (!/^[0-9]+$/.test(values.accountNumber))
    errors.accountNumber = "Must be a number";

  if (!values.bankBranch) errors.bankBranch = "Bank Branch is required";
  if (!values.ifscCode) errors.ifscCode = "IFSC Code is required";
  if (!values.supportingDocuments) errors.supportingDocuments = "Supporting document is required";

  return errors;
};

const PaymentRequestForm = () => {
  const initialValues = {
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    paymentAmount: "",
    paymentMethod: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    bankBranch: "",
    ifscCode: "",
    supportingDocuments: null,
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(null);

  const handleSubmit = (values) => {
    setFormValues(values); // Store for modal confirmation
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    setIsModalOpen(false);

    const submissionData = {
      amount: formValues.paymentAmount,
      description: "Payment Request",
      phone: formValues.contactNumber,
      email: formValues.emailAddress,
      payment_method: formValues.paymentMethod,
      account_holder_name: formValues.accountHolderName,
      account_number: formValues.accountNumber,
      bank_branch: formValues.bankBranch,
      bank_name: formValues.bankName,
      ifsc_code: formValues.ifscCode,
    };

    try {
      const response = await paymentData(submissionData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Submission failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue_bg">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-2/3 lg:w-1/2 p-12 bg-white rounded-2xl shadow-xl m-8">
            {fields.map(({ label, name, type, placeholder }) => (
              <div key={name} className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {label}
                </label>
                <Field
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  className="border border-light_gray h-10 rounded-md p-2 w-full"
                />
                <ErrorMessage name={name} component="div" style={{ color: "red", fontSize: "11px" }} />
              </div>
            ))}

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <Field
                as="select"
                name="paymentMethod"
                className="p-2 pl-3 w-full rounded-md border border-light_gray h-10"
              >
                <option value="" disabled hidden>
                  Select method
                </option>
                <option value="bank">Bank Transfer</option>
                <option value="upi">UPI</option>
                <option value="wallet">Wallet</option>
              </Field>
              <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Supporting Documents
              </label>
              <input
                type="file"
                onChange={(event) => setFieldValue("supportingDocuments", event.target.files[0])}
                className="border border-light_gray p-2 rounded-md w-full h-10"
              />
              <ErrorMessage name="supportingDocuments" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button type="reset" className="bg-lite_red text-white rounded-full mr-2 w-48 h-8">
                Cancel
              </button>
              <button type="submit" className="bg-id_gray text-white rounded-full w-48 h-8">
                Confirm
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {formValues && (
        <ReUsableModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          heading="Confirm Payment Request"
          message={
            <div>
              {fields.map(({ label, name }) => (
                <p key={name}>
                  <strong>{label}:</strong> {formValues[name]}
                </p>
              ))}
            </div>
          }
          confirm={true}
          confirm_label="Confirm"
          cancel={true}
          cancel_label="Cancel"
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default PaymentRequestForm;
