import React from "react";

const Electric = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Electric Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>Cooch Behar Electricity Board – Main Office</h3>
            <p>
              Nripendra Narayan Road, Power House Chowpathi,Cooch Behar, West
              Bengal
            </p>
            <p>Phone : 03582222337</p>
            <p>Website Link : https://www.wbsedcl.in/</p>
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

export default Electric;
