import React from 'react';

const FormSection = ({ title, children }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-5 mb-8 shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <form>{children}</form>
    </div>
  );
};

export default FormSection;
