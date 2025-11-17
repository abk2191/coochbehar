import React from "react";

const Schools = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Schools in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>Cooch Behar High School</h3>
            <p>Nripendra Narayan Road, Cooch Behar, West Bengal</p>
            <p>Email : cbhs[at]gmail[dot]com</p>
            <p>Phone : 03582222678</p>
            <p>Established: 1872</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>Sunity Academy</h3>
            <p>Sunity Road, Cooch Behar, West Bengal</p>
            <p>Email : sunityacademy[at]gmail[dot]com</p>
            <p>Phone : 03582223456</p>
            <p>Board: CBSE</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>St. Mary's School</h3>
            <p>Biswa Singha Road, Cooch Behar, West Bengal</p>
            <p>Email : stmaryscoochbehar[at]gmail[dot]com</p>
            <p>Phone : 03582224567</p>
            <p>Board: ICSE</p>
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

export default Schools;
