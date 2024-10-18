import React from 'react';
import FormSection from './FormSection';
import InputField from './InputField';
import SelectField from './SelectField';
import NewButton from './NewButton';

function App() {
  return (
    <div className="w-full font-poppins px-6 pb-10 lg:px-10 bg-white">
      {/* Update SMS Setting */}
      <FormSection title="Update SMS Setting">
        <SelectField label="SMS Driver" options={['Twilio', 'Nexmo']} />
        <div className="flex space-x-5">
          <InputField label="Twilio SID" placeholder="AC8f4bf..." />
          <InputField label="Twilio Auth Token" type="password" placeholder="**************" />
        </div>
        <div className="flex space-x-5">
          <InputField label="Twilio Sender Number" placeholder="+14154466117" />
          <InputField label="Nexmo Key" placeholder="7e29c3e" />
        </div>
        <div className="flex space-x-5">
          <InputField label="Nexmo Secret" type="password" placeholder="**************" />
          <InputField label="Nexmo Sender Name" placeholder="ABC" />
        </div>
        <NewButton />
      </FormSection>

      {/* Update Mail Setting */}
      <FormSection title="Update Mail Setting">
        <div className="flex space-x-5">
          <SelectField label="Mail Driver" options={['SMTP', 'Sendmail']} />
          <InputField label="Mail Host" placeholder="smtp.mailtrap.io" />
        </div>
        <div className="flex space-x-5">
          <InputField label="Mail Port" placeholder="2525" />
          <InputField label="Mail Username" placeholder="5b1c119ce5a400" />
        </div>
        <div className="flex space-x-5">
          <InputField label="Mail Password" type="password" placeholder="**************" />
          <SelectField label="Mail Encryption" options={['TLS', 'SSL']} />
        </div>
        <div className="flex space-x-5">
          <InputField label="Sender Email" type="email" placeholder="info@mail.com" />
          <InputField label="Sender Name" placeholder="Info Company" />
        </div>
        <NewButton />
      </FormSection>
    </div>
  );
}

export default App;
