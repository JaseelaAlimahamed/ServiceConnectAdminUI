import { useEffect, useState } from "react";
import { getFranchiseeTypes } from "../../../service/api/admin/GetApi";
import { deleteFranchiseeTypes } from "../../../service/api/admin/DeleteApi";
import { updateFranchiseeTypes } from "../../../service/api/admin/PatchApi";
import { createFranchiseeType } from "../../../service/api/admin/PostApi";
import ReUsableModal from "../../reUsableComponents/ReusableModal";
const FranchiseeCategory = () => {
  const [franchiseeTypes, setFranchiseeTypes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess,setModalSucess] = useState(false)
  const [successModalHeading,setSuccessModalHeading] = useState('')
  const [selectedFranchisee, setSelectedFranchisee] = useState({
    name: "",
    details: "",
    amount: "",
    currency: "",
  });
  const [formdata, setFormdata] = useState({
    name: "",
    details: "",
    amount: "",
    currency: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  useEffect(() => {
    const fetchFranchiseeTypes = async () => {
      try {
        const response = await getFranchiseeTypes();

        setSelectedFranchisee(response[0]); // select first element of array
        setFranchiseeTypes(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFranchiseeTypes();
  }, []);

  const formValidation = () => {
    const validCurrencies = [
      "USD",
      "EUR",
      "INR",
      "GBP",
      "AUD",
      "CAD",
      "JPY", 
      "CNY",
      "CHF",
      "SGD",
    ];
    const newError = {};
    if (!selectedFranchisee.name.trim()) {
      newError.name = "Franchisee name is required";
    }
    console.log(selectedFranchisee.details);
    if (!selectedFranchisee.details.trim()) {
      newError.details = "Franchisee details is required";
    } else if (selectedFranchisee.details.trim().length < 3) {
      newError.details = "Enter deatails more than 3 ";
    }
    if (!selectedFranchisee.amount.trim()) {
      newError.amount = "Amount is required";
    } else if (isNaN(selectedFranchisee.amount)) {
      newError.amount = "Enter a valid amount";
    }

    if (!selectedFranchisee.currency.trim()) {
      newError.currency = "Currency is required";
    } else if (
      !validCurrencies.includes(
        selectedFranchisee.currency.trim()
      )
    ) {
      newError.currency = "Currency must be one of 'USD', 'EUR', 'INR', 'GBP', 'AUD', 'CAD', 'JPY', 'CNY', 'CHF', 'SGD'";
    }

    setFormErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleDelete = async (type) => {
    const response = await deleteFranchiseeTypes(selectedFranchisee.id);

    if (response.status === 204) {
      setFranchiseeTypes((prev) =>
        prev.filter((item) => item.id !== selectedFranchisee.id)
      );
      
      setModalOpen(false);
    }
  };

  const handleSave = () => {
    if (formValidation()) {
    
      const exist = franchiseeTypes.find(
        (item) => item.id === selectedFranchisee.id
      );
      if (exist) {
        const update = async () => {
          const response = await updateFranchiseeTypes(selectedFranchisee);

          if (response.status === 200) {
            // Update the state with the modified item
            setFranchiseeTypes((prev) =>
              prev.map((item) =>
                item.id === selectedFranchisee.id ? response.data : item
              )
            );
            setSuccessModalHeading("Franchisee Upated")
            setModalSucess(true)
            setIsSaveDisabled(true);
            setTimeout(() => setIsSaveDisabled(false), 3000);
          }
        };

        return update();
      } else {
        const add = async () => {
          const response = await createFranchiseeType(selectedFranchisee);

          if (response.status === 201) {
            // add new item

            setFranchiseeTypes((prev) => [...prev, response.data]);
          }
          setSuccessModalHeading("Franchisee Created")
          setModalSucess(true)
          setIsSaveDisabled(true);
          setTimeout(() => setIsSaveDisabled(false), 3000);
        };
        return add();
      }
    }
  };

  const handleSaveDraft = () => {};

  const handleClick = (id) => {
    const clickedItem = franchiseeTypes.find((item) => item.id === id);

    setSelectedFranchisee(clickedItem);
  };

  const handleAddItem = () => {
    setSelectedFranchisee({ name: "", details: "", amount: "", currency: "" });
  };

  const handleChange = (key, value) => {
    setSelectedFranchisee((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div className="flex flex-col md:flex-row bg-gray min-h-screnn h-full  p-4 ">
      <ReUsableModal
        isOpen={modalOpen}
        heading={"Do you want to delete"}
        confirm={true}
        confirm_label="YES"
        cancel={true}
        cancel_label="NO"
        onConfirm={handleDelete}
        onClose={() => {
          setModalOpen(false);
        }}
      ></ReUsableModal>
  <ReUsableModal
        isOpen={modalSuccess}
        heading={successModalHeading}
        confirm={true}
        confirm_label="Ok"
        onConfirm={() =>{
          setModalSucess(false)
        }}
    
      ></ReUsableModal>
      
      {/* Type Section */}
      <div className="w-full md:w-1/4 h-auto bg-primary rounded-lg shadow-lg  mr-0 md:mr-4  md:mb-0">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold   text-dark_blue mt-3 ml-2">
            Type
          </h2>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4.00023H4C3.46957 4.00023 2.96086 4.21094 2.58579 4.58601C2.21071 4.96109 2 5.46979 2 6.00023V20.0002C2 20.5307 2.21071 21.0394 2.58579 21.4144C2.96086 21.7895 3.46957 22.0002 4 22.0002H18C18.5304 22.0002 19.0391 21.7895 19.4142 21.4144C19.7893 21.0394 20 20.5307 20 20.0002V13.0002M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
              stroke="#1E1E1E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* type */}
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center w-full  space-y-5">
            {franchiseeTypes.map((each, index) => (
              <li
                key={each.id}
                className={
                  selectedFranchisee.id === each.id
                    ? "bg-blue_gray text-secondary text-center p-2 mb- rounded-lg cursor-pointer w-3/4 flex justify-center"
                    : "bg-gray text-secondary text-center p-2 mb- rounded-lg cursor-pointer hover:bg-blue_gray w-3/4 flex justify-center"
                }
                onClick={() => {
                  handleClick(each.id);
                }}
              >
                {each.name}
              </li>
            ))}
          </ul>

          {/* Add Item Button */}
          <button
            onClick={handleAddItem}
            className="bg-gray text-secondary p-2 w-3/4 h-9 mb-2 rounded-lg hover:bg-blue_gray mt-5"
          >
            + Add Item
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-primary rounded-lg shadow-lg p-8 relative max-w-full h-[300px] overflow-auto mt-2">
        <h2 className="text-xl font-semibold mb-1 text-secondary">
          Franchisee Type
        </h2>
        <div className="space-y-4">
          <div className="flex  flex-col justify-center items-center  text-secondary ">
            <input
              type="text"
              placeholder={"Enter franchisee type name"}
              value={selectedFranchisee.name}
              className="w-full md:w-64 h-9 bg-gray  text-center justify-center placeholder-secondary"
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {formErrors.name && <p className="text-red">{formErrors.name}</p>}
          </div>

          <div className="flex  flex-col justify-center items-center  text-secondary ">
            <input
              type="text"
              placeholder={"Enter details"}
              className="w-full md:w-64 h-9 bg-gray  text-center justify-center placeholder-secondary"
              onChange={(e) => handleChange("details", e.target.value)}
              value={selectedFranchisee.details}
            />
            {formErrors.details && (
              <p className="text-red">{formErrors.details}</p>
            )}
          </div>
          <div className="flex  flex-col justify-center items-center  text-secondary ">
            <input
              type="text"
              placeholder={"Enter amount"}
              onChange={(e) => handleChange("amount", e.target.value)}
              className="w-full md:w-64 h-9 bg-gray  text-center justify-center placeholder-secondary"
              value={selectedFranchisee.amount}
            />
            {formErrors.amount && (
              <p className="text-red">{formErrors.amount}</p>
            )}
          </div>
          <div className="flex  flex-col justify-center items-center  text-secondary ">
            <input
              type="text"
              placeholder={"Enter currency"}
              className="w-full md:w-64 h-9 bg-gray  text-center justify-center placeholder-secondary"
              onChange={(e) => handleChange("currency", e.target.value)}
              value={selectedFranchisee.currency}
            />

            {formErrors.currency && (
              <p className="text-red">{formErrors.currency}</p>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex   md:flex-row   flex-col  md:absolute  md:mt-0 justify-end bottom-0 right-0 mr-2 p-4 space-y-2 md:space-y-0 md:jusfity-end ">
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          className="w-full md:w-24 h-10 border bg-red text-primary px-3 py-1 rounded-full flex justify-center items-center"
        >
          Delete
        </button>

        <button
          onClick={handleSaveDraft}
          className="w-full md:w-36 h-10 border border-violet text-violet px-3 py-1 rounded-full flex justify-center items-center"
        >
          Save as Draft
        </button>

        <button
          onClick={handleSave}
          disabled={isSaveDisabled}
          className={`w-full md:w-24 h-10 ${
            isSaveDisabled
              ? "bg-slate-500 cursor-not-allowed"
              : "bg-violet text-primary"
          } px-3 py-1 rounded-full flex justify-center items-center`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FranchiseeCategory;
