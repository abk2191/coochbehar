import React from "react";

const NGOs = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>NGOs in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>Cooch Behar Social Welfare Society</h3>
            <p>Rabindra Road, Cooch Behar, West Bengal</p>
            <p>Email : cbsws[at]gmail[dot]com</p>
            <p>Phone : 03582224567</p>
            <p>Focus Areas: Education, Women Empowerment</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>North Bengal Development Trust</h3>
            <p>Gandhi Para, Cooch Behar, West Bengal</p>
            <p>Email : nbdt[at]yahoo[dot]com</p>
            <p>Phone : 03582226789</p>
            <p>Focus Areas: Rural Development, Healthcare</p>
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

export default NGOs;
