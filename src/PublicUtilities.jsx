function PublicUtilities({ openModal }) {
  return (
    <>
      <div className="container">
        <div className="sagar-dighi-desc-div">
          <h2>PUBLIC UTILITIES</h2>
          <div className="all-public-utilities">
            <div className="public-util-items">
              <h3>Banks</h3>
              <button className="more-info-btn" onClick={openModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>College</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Electricity</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Hospitals</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Municipalities</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>NGOs</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Postal</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Schools</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Blood Banks</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Ambulance</h3>
              <button className="more-info-btn">More Info</button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Diagnostic Centre</h3>
              <button className="more-info-btn">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicUtilities;
