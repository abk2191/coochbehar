import React from "react";

const Colleges = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Colleges Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>Acharjya Brajendra Nath Seal (A.B.N.Seal) College</h3>
            <p>SBeside Rashmela Ground,Cooch Behar</p>
            <p>Email : cobabnsealcollege[at]gmail[dot]com</p>
            <p>Phone : 03582226112</p>
            <p>Website Link : https://abnscollege.org/</p>
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

export default Colleges;
