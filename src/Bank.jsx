import React from "react";

const Bank = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Banks in Coochbehar</h2>
        <div className="bank-list">
          <div className="bank-item">
            <h3>State Bank of India</h3>
            <p>Main Branch, Coochbehar</p>
            <p>Phone: 03582-123456</p>
          </div>
          <div className="bank-item">
            <h3>United Bank of India</h3>
            <p>Keshab Road, Coochbehar</p>
            <p>Phone: 03582-234567</p>
          </div>
          <div className="bank-item">
            <h3>Punjab National Bank</h3>
            <p>J.N. Road, Coochbehar</p>
            <p>Phone: 03582-345678</p>
          </div>
          <div className="bank-item">
            <h3>Bank of India</h3>
            <p>B.S. Road, Coochbehar</p>
            <p>Phone: 03582-456789</p>
          </div>
          <div className="bank-item">
            <h3>State Bank of India</h3>
            <p>Main Branch, Coochbehar</p>
            <p>Phone: 03582-123456</p>
          </div>
          <div className="bank-item">
            <h3>State Bank of India</h3>
            <p>Main Branch, Coochbehar</p>
            <p>Phone: 03582-123456</p>
          </div>
          <div className="bank-item">
            <h3>State Bank of India</h3>
            <p>Main Branch, Coochbehar</p>
            <p>Phone: 03582-123456</p>
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Bank;
