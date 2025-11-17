import React from "react";

const Municipalities = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Municipalities in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>Cooch Behar Municipality</h3>
            <p>Nripendra Narayan Road, Cooch Behar, West Bengal</p>
            <p>Email : coochbeharmunicipality[at]gmail[dot]com</p>
            <p>Phone : 03582222054</p>
            <p>Website Link : https://coochbeharmunicipality.org</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>Dinhata Municipality</h3>
            <p>Station Road, Dinhata, Cooch Behar, West Bengal</p>
            <p>Email : dinhatamunicipality[at]gmail[dot]com</p>
            <p>Phone : 03586255201</p>
            <p>Pincode: 736135</p>
          </div>
          <div className="bank-item">
            <h3>Tufanganj Municipality</h3>
            <p>College Road, Tufanganj, Cooch Behar, West Bengal</p>
            <p>Email : tufanganjmunicipality[at]gmail[dot]com</p>
            <p>Phone : 03583255210</p>
            <p>Pincode: 736159</p>
          </div>
        </div>
        <div className="centered">
          <button onClick={onClosethis}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Municipalities;
