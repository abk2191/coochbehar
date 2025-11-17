import React, { useState } from "react";

const Bank = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Banks</h2>
        <p>This is the modal content!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Bank;
