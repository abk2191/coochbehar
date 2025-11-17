import React from "react";

const Hospital = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Hospitals in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>Maharaja Jitendra Narayan Medical College & Hospital</h3>
            <p>Vivekananda Street, Pilkhana, Cooch Behar, West Bengal</p>
            <p>Email : msvpcoochbehargmch[at]gmail[dot]com</p>
            <p>Phone : 0358222171</p>
            <p>Website Link : https://www.mjnmch.ac.in/</p>
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

export default Hospital;
