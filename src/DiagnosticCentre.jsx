import React from "react";

const DiagnosticCentre = ({ isitOpen, onClosethis }) => {
  if (!isitOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClosethis}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="centered">
          <h2>Diagnostic Centers in Coochbehar</h2>
        </div>
        <div className="bank-list">
          <div className="bank-item">
            <h3>Cooch Behar Diagnostic Centre</h3>
            <p>Nripendra Narayan Road, Cooch Behar, West Bengal</p>
            <p>Email : cbdiagnostic[at]gmail[dot]com</p>
            <p>Phone : 03582226789</p>
            <p>Services: CT Scan, MRI, X-Ray, Pathology</p>
            <p>Timings: 8:00 AM - 8:00 PM</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>MJN Medical College Diagnostic Lab</h3>
            <p>Vivekananda Street, Cooch Behar, West Bengal</p>
            <p>Phone : 03582222171</p>
            <p>Services: All Pathology Tests, Radiology</p>
            <p>Timings: 24x7</p>
            <p>Pincode: 736101</p>
          </div>
          <div className="bank-item">
            <h3>Modern Diagnostic & Research Centre</h3>
            <p>Biswa Singha Road, Cooch Behar, West Bengal</p>
            <p>Email : moderndiagnostic[at]yahoo[dot]com</p>
            <p>Phone : 03582227890</p>
            <p>Services: Ultrasound, ECG, Blood Tests</p>
            <p>Timings: 7:00 AM - 9:00 PM</p>
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

export default DiagnosticCentre;
