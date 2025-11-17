import React from "react";

const Bank = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Banks in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>AXIS BANK – COOCHBEHAR BRANCH</h3>
            <p>Sunity Road,Cooch Behar-I Block,Cooch Behar, West Bengal</p>
            <p>Email : kochbihar.branchhead@axisbank.com</p>
            <p>Phone : 918001603961</p>
            <p>Website Link : https://www.axisbank.com</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>HDFC BANK – COOCHBEHAR BRANCH</h3>
            <p>
              Nripendra Narayan Road,Old Post Office Para,Cooch Behar-I
              Block,Cooch Behar, West Bengal
            </p>
            <p>Email : biswajit[dot]majumder[at]hdfcbank[dot]com</p>
            <p>Phone : 919830624543</p>
            <p>Website Link : https://www.hdfcbank.com</p>
            <p>Pincode: 736101</p>
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
        <div className="centered">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Bank;
