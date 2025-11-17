import React from "react";

const Ambulance = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Ambulance Services in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>108 Emergency Ambulance Service</h3>
            <p>Available throughout Cooch Behar District</p>
            <p>Emergency Number: 108</p>
            <p>Service: Free Emergency Ambulance</p>
            <p>Available: 24x7</p>
          </div>
          <div className="bank-item">
            <h3>MJN Medical College Ambulance</h3>
            <p>Vivekananda Street, Cooch Behar, West Bengal</p>
            <p>Phone : 03582222171</p>
            <p>Service: Patient Transport</p>
            <p>Available: 24x7</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>Private Ambulance Services</h3>
            <p>Contact: 9832156789</p>
            <p>Service: AC & Non-AC Ambulances</p>
            <p>Available: 24x7</p>
          </div>
        </div>
        <div className="centered">
          <button onClick={onClosethis}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Ambulance;
