import React from "react";

const Postal = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Postal Services in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>Cooch Behar Head Post Office</h3>
            <p>Nripendra Narayan Road, Cooch Behar, West Bengal</p>
            <p>Email : coochbeharho[at]indiapost[dot]gov[dot]in</p>
            <p>Phone : 03582222534</p>
            <p>Timings: 10:00 AM - 6:00 PM</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>Cooch Behar GPO</h3>
            <p>Sunity Road, Cooch Behar, West Bengal</p>
            <p>Phone : 03582222045</p>
            <p>Timings: 9:00 AM - 5:00 PM</p>
            <p>Pincode: 736101</p>
          </div>
        </div>
        <div className="centered">
          <button onClick={onClosethis}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Postal;
