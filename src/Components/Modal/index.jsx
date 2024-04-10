import React from "react";

const ConfirmModal = ({ show, close, message }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg z-50">
          <h2 className="text-xl font-bold mb-4">{message.title}</h2>
          <p className="mb-4">{message.body}</p>
          <button onClick={close} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  
  export default ConfirmModal;