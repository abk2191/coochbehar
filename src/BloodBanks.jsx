import React from "react";

const BloodBanks = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Blood Banks in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>MJN Medical College Blood Bank</h3>
            <p>Vivekananda Street, Cooch Behar, West Bengal</p>
            <p>Email : mjnbloodbank[at]gmail[dot]com</p>
            <p>Phone : 03582222171</p>
            <p>Timings: 24x7</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>Red Cross Society Blood Bank</h3>
            <p>Hospital Road, Cooch Behar, West Bengal</p>
            <p>Phone : 03582223456</p>
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

export default BloodBanks;
