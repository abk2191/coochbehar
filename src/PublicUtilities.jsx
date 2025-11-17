function PublicUtilities({
  openBankModal,
  openCollegeModal,
  openElectricModal,
  openHospitalModal,
  openMunicipalityModal,
  openNGOsModal,
  openPostalModal,
  openSchoolsModal,
  openBloodBanksModal,
  openAmbulanceModal,
  openDiagnosticCentreModal,
}) {
  return (
    <>
      <div className="container">
        <div className="sagar-dighi-desc-div">
          <h2>PUBLIC UTILITIES</h2>
          <div className="all-public-utilities">
            <div className="public-util-items">
              <h3>Banks</h3>
              <button className="more-info-btn" onClick={openBankModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Colleges</h3>
              <button className="more-info-btn" onClick={openCollegeModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Electricity</h3>
              <button className="more-info-btn" onClick={openElectricModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Hospitals</h3>
              <button className="more-info-btn" onClick={openHospitalModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Municipalities</h3>
              <button className="more-info-btn" onClick={openMunicipalityModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>NGOs</h3>
              <button className="more-info-btn" onClick={openNGOsModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Postal</h3>
              <button className="more-info-btn" onClick={openPostalModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Schools</h3>
              <button className="more-info-btn" onClick={openSchoolsModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Blood Banks</h3>
              <button className="more-info-btn" onClick={openBloodBanksModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Ambulance</h3>
              <button className="more-info-btn" onClick={openAmbulanceModal}>
                More Info
              </button>
            </div>
            <div className="long-dash"></div>
            <div className="public-util-items">
              <h3>Diagnostic Centre</h3>
              <button
                className="more-info-btn"
                onClick={openDiagnosticCentreModal}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicUtilities;
