import React from 'react'

function SeviceModal({ isOpen, onClose, title, children, confirmText, onConfirm }) {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end mt-6">
            <button
                className="px-4 py-2 mr-2 text-gray-700 border rounded hover:bg-gray-200"
                onClick={onClose}
            >
                Cancel
            </button>
            {confirmText && (
                <button
                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    onClick={onConfirm}
                >
                    {confirmText}
                </button>
            )}
        </div>
    </div>
</div>
  )
}

export default SeviceModal
