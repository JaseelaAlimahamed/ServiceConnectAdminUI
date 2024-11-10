import React, { useState } from "react";
import FormInput from "../../components/reUsableComponents/FormInput";
import { FaCheck } from "react-icons/fa";

function SettingsPage() {
  const [smsSettings, setSmsSettings] = useState({
    driver: "Twilio",
    sid: "AC8f4bf6d69c98ad28cf8a13dc8a8cca836",
    authToken: "jnkJjdvdfbfd",
    senderNumber: "+14154461617",
    nexmoKey: "7e2g3cce",
    nexmoSecret: "7854154",
    nexmoSender: "ABC",
  });

  const [mailSettings, setMailSettings] = useState({
    driver: "SMTP",
    host: "smtp.mailtrap.io",
    port: "2525",
    username: "5b1c119ce5a400",
    password: "65615544",
    encryption: "TLS",
    senderEmail: "info@mail.com",
    senderName: "Info Company",
  });

  const handleSmsChange = (e) => {
    const { name, value } = e.target;
    setSmsSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleMailChange = (e) => {
    const { name, value } = e.target;
    setMailSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSmsSubmit = (e) => {
    e.preventDefault();
    console.log("SMS Settings submitted:", smsSettings);
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    console.log("Mail Settings submitted:", mailSettings);
  };

  return (
    <div className="w-full md:w-3/4 p-4 md:p-6  font-poppins">
      <form
        onSubmit={handleSmsSubmit}
        className="mb-6 bg-white rounded-2xl  p-4"
      >
        <h2 className="border-l-4 border-l-blue-500 pl-4 text-lg mb-4">
          Update SMS Setting
        </h2>
        <div className="flex flex-wrap gap-4">
          <FormInput
            label="SMS Driver"
            type="select"
            name="driver"
            id="full"
            value={smsSettings.driver}
            onChange={handleSmsChange}
            options={["Twilio", "Nexmo"]}
            className="w-full" 
            width="100%" 
          />
          <FormInput
            label="Twilio SID"
            name="sid"
            value={smsSettings.sid}
            onChange={handleSmsChange}
            className="w-full md:w-[48%]"
          />
          <FormInput
            label="Nexmo Key"
            name="nexmoKey"
            value={smsSettings.nexmoKey}
            onChange={handleSmsChange}
            className="w-full md:w-[48%]"
          />
          <FormInput
            label="Twilio Auth Token"
            type="password"
            name="authToken"
            value={smsSettings.authToken}
            onChange={handleSmsChange}
            className="w-full md:w-[48%]"
          />
          <FormInput
            label="Nexmo Secret"
            type="password"
            name="nexmoSecret"
            value={smsSettings.nexmoSecret}
            onChange={handleSmsChange}
            className="w-full md:w-[48%]"
          />
          <FormInput
            label="Twilio Sender Number"
            name="senderNumber"
            value={smsSettings.senderNumber}
            onChange={handleSmsChange}
            className="w-full md:w-[48%]"
          />
          <FormInput
            label="Nexmo Sender Name"
            name="nexmoSender"
            value={smsSettings.nexmoSender}
            onChange={handleSmsChange}
            className="w-full md:w-[48%]"
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto mt-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
        ><FaCheck/>
          Update
        </button>
      </form>

      <form onSubmit={handleMailSubmit} className="bg-white rounded-2xl p-4">
        <h2 className="border-l-4 border-l-blue-500 pl-4 text-lg mb-4">
          Update Mail Setting
        </h2>
        <div className="flex flex-wrap gap-4">
          <FormInput
            label="Mail Driver"
            type="select"
            name="driver"
            value={mailSettings.driver}
            onChange={handleMailChange}
            options={["SMTP", "SendGrid"]}
            className="w-full md:w-1/2"
          />
          <FormInput
            label="Mail Host"
            name="host"
            value={mailSettings.host}
            onChange={handleMailChange}
            className="w-full md:w-1/2"
          />
          <FormInput
            label="Mail Port"
            name="port"
            value={mailSettings.port}
            onChange={handleMailChange}
            className="w-full md:w-1/2"
          />
          <FormInput
            label="Mail Username"
            name="username"
            value={mailSettings.username}
            onChange={handleMailChange}
            className="w-full md:w-1/2"
          />
          <FormInput
            label="Mail Password"
            type="password"
            name="password"
            value={mailSettings.password}
            onChange={handleMailChange}
            className="w-full md:w-1/2"
          />
          <FormInput
            label="Mail Encryption"
            type="select"
            name="encryption"
            value={mailSettings.encryption}
            onChange={handleMailChange}
            options={["TLS", "SSL"]}
            className="w-full md:w-1/2"
          />
          <FormInput
            label="Sender Email"
            type="email"
            name="senderEmail"
            value={mailSettings.senderEmail}
            onChange={handleMailChange}
            className="w-full md:w-1/2"
          />
          <FormInput
            label="Sender Name"
            name="senderName"
            value={mailSettings.senderName}
            onChange={handleMailChange}
            className="w-full md:w-1/2"
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto mt-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
        ><FaCheck/>
          Update
        </button>
      </form>
    </div>
  );
}

export default SettingsPage;
