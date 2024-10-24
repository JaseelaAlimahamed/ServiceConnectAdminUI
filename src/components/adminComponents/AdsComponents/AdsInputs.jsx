import React, { useState } from 'react';
import ImagePicker from './ImagePicker'; // Adjust the import path as necessary
import ButtonGroup from './ButtonGroup';
import ProviderAvatar from './ProviderAvatar';

const AdsInputs = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [status, setStatus] = useState('Status'); // Initial status
    const [formValues, setFormValues] = useState({
        formTitle: '',
        formDescription: '',
        fromDate: '',
        fromTime: '',
        toDate: '',
        toTime: '',
        targetArea: 'upto 5 km radius',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Custom validation logic
        if (!selectedImage) {
            alert('Please select an image');
            return;
        }

        if (status === 'Status') {
            alert('Please select a valid status (Active or Inactive)');
            return;
        }

        alert(
            `Form Title: ${formValues.formTitle}\n` +
            `Form Description: ${formValues.formDescription}\n` +
            `From Date: ${formValues.fromDate} From Time: ${formValues.fromTime}\n` +
            `To Date: ${formValues.toDate} To Time: ${formValues.toTime}\n` +
            `Target Area: ${formValues.targetArea}\n` +
            `Status: ${status}\n` +
            `Image: ${selectedImage}`
        );
    };

    return (
        <div className="bg-white p-4 sm:p-6 md:p-10 rounded-xl">
            <h3 className="text-3xl text-dark_blue font-bold">Ads-type</h3>
            <ProviderAvatar />
            <form className="w-full sm:w-[340px]" onSubmit={handleSubmit}>
                {/* Image Picker */}
                <ImagePicker selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

                <div className="mt-4">
                    <input
                        name="formTitle"
                        placeholder="Title"
                        className="w-full p-2 border border-light_gray rounded-lg mb-2"
                        value={formValues.formTitle}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="formDescription"
                        placeholder="Description"
                        className="w-full p-2 border border-light_gray rounded-lg mb-2"
                        value={formValues.formDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h2 className="font-bold my-4">Schedule</h2>

                {/* From Section */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">From</label>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            name="fromDate"
                            type="date"
                            className="w-full p-2 border rounded-lg text-light_gray"
                            value={formValues.fromDate}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="fromTime"
                            type="time"
                            className="w-full p-2 border rounded-lg text-light_gray"
                            value={formValues.fromTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* To Section */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">To</label>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            name="toDate"
                            type="date"
                            className="w-full p-2 border rounded-lg text-light_gray"
                            value={formValues.toDate}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="toTime"
                            type="time"
                            className="w-full p-2 border rounded-lg text-light_gray"
                            value={formValues.toTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Target Area Section */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Target Area</label>
                    <select
                        name="targetArea"
                        className="w-full p-2 border rounded-lg"
                        value={formValues.targetArea}
                        onChange={handleChange}
                        required
                    >
                        <option value="upto 5 km radius">upto 5 km radius</option>
                        <option value="upto 10 km radius">upto 10 km radius</option>
                        <option value="upto 20 km radius">upto 20 km radius</option>
                        <option value="custom radius">custom radius</option>
                    </select>
                </div>

                <div className="mb-4 flex flex-col">
                    <span>Total Number of Days: 30</span>
                    <span>Estimated Price: Rs 350/-</span>
                </div>
            </form>
            <div className="flex justify-end mt-4">
                    <ButtonGroup status={status} setStatus={setStatus} handleSubmit={handleSubmit} />
                </div>
        </div>
    );
};

export default AdsInputs;
