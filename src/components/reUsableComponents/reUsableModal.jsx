import React from 'react';

const ReUsableModal = ({
  isOpen,
  onClose,
  image,
  heading,
  message,
  confirm = false,
  confirm_label='confirm',
  cancel =false,
  cancel_label='cancel',
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed flex inset-10 items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg p-6">
      {image && (
          <div className="flex justify-center mb-4">
            <img src={image} alt="Modal Graphic" className="w-28 h-28" />
          </div>
        )}
        {heading && <h2 className="text-center text-2xl font-bold mb-4">{heading}</h2>}
        {message && <div className="text-id_gray mb-4 justify-center flex">{message}</div>}
        <div className="flex justify-center space-x-4">
        {cancel && (
          <button className="bg-lite_red text-white px-4 py-2 rounded-full" onClick={onClose}>
            {cancel_label}
            </button>
        )}
          {confirm && (
            <button className="bg-lite_green text-white px-4 py-2 rounded-full" onClick={onConfirm}>
              {confirm_label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReUsableModal;
