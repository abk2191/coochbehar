import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CityDescription from "./CityDescription";
import Sidebar from "./Sidebar";
import SecondBanner from "./SecondBanner";
import CityStats from "./CityStats";
import CobPalace from "./CobPalace";
import MadanMohan from "./MadanMohan";
import KochDynasty from "./KochDynasty";
import ImageViewer from "./ImageViewer";
import PublicUtilities from "./PublicUtilities";
import Bank from "./Bank";
import Colleges from "./Colleges";
import Electric from "./Electric";
import Hospital from "./Hospitals";
import Municipalities from "./Municipalities";
import NGOs from "./NGOs";
import Postal from "./Postal";
import Schools from "./Schools";
import BloodBanks from "./BloodBanks";
import Ambulance from "./Ambulance";
import DiagnosticCentre from "./DiagnosticCentre";

function App() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);
  const [imageName, setImageName] = useState("");
  const [shouldImageViewerOpen, setShouldImageViewerOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
  const [isElectricityModalOpen, setIsElectricityModalOpen] = useState(false);
  const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false);
  const [isMunicipalityModalOpen, setIsMunicipalityModalOpen] = useState(false);
  const [isNGOsModalOpen, setIsNGOsModalOpen] = useState(false);
  const [isPostalModalOpen, setIsPostalModalOpen] = useState(false);
  const [isSchoolsModalOpen, setIsSchoolsModalOpen] = useState(false);
  const [isBloodBanksModalOpen, setIsBloodBanksModalOpen] = useState(false);
  const [isAmbulanceModalOpen, setIsAmbulanceModalOpen] = useState(false);
  const [isDiagnosticCentreModalOpen, setIsDiagnosticCentreModalOpen] =
    useState(false);

  const openBankModal = () => setIsBankModalOpen(true);
  const closeBankModal = () => setIsBankModalOpen(false);

  const openCollegeModal = () => setIsCollegeModalOpen(true);
  const closeCollegeModal = () => setIsCollegeModalOpen(false);

  const openElectricModal = () => setIsElectricityModalOpen(true);
  const closeElectricModal = () => setIsElectricityModalOpen(false);

  const openHospitalModal = () => setIsHospitalModalOpen(true);
  const closeHospitalModal = () => setIsHospitalModalOpen(false);

  const openMunicipalityModal = () => setIsMunicipalityModalOpen(true);
  const closeMunicipalityModal = () => setIsMunicipalityModalOpen(false);

  const openNGOsModal = () => setIsNGOsModalOpen(true);
  const closeNGOsModal = () => setIsNGOsModalOpen(false);

  const openPostalModal = () => setIsPostalModalOpen(true);
  const closePostalModal = () => setIsPostalModalOpen(false);

  const openSchoolsModal = () => setIsSchoolsModalOpen(true);
  const closeSchoolsModal = () => setIsSchoolsModalOpen(false);

  const openBloodBanksModal = () => setIsBloodBanksModalOpen(true);
  const closeBloodBanksModal = () => setIsBloodBanksModalOpen(false);

  const openAmbulanceModal = () => setIsAmbulanceModalOpen(true);
  const closeAmbulanceModal = () => setIsAmbulanceModalOpen(false);

  const openDiagnosticCentreModal = () => setIsDiagnosticCentreModalOpen(true);
  const closeDiagnosticCentreModal = () =>
    setIsDiagnosticCentreModalOpen(false);

  function handleSidebarToggle() {
    setSideBarVisibility((prev) => !prev);
  }

  function handleImageViewer(imageSrc) {
    setImageName(imageSrc);
    setShouldImageViewerOpen((prev) => !prev);
    console.log("clicked");
  }

  function handleImageViewerClose() {
    setShouldImageViewerOpen(false);
  }

  return (
    <>
      <Navbar
        handleSidebarToggle={handleSidebarToggle}
        sideBarVisibility={sideBarVisibility}
      />
      <Banner />
      {sideBarVisibility && <Sidebar />}
      <div className="main-container">
        <CityDescription />
        <CobPalace handleImageViewer={handleImageViewer} />
        <KochDynasty handleImageViewer={handleImageViewer} />
        <SecondBanner handleImageViewer={handleImageViewer} />
        <MadanMohan handleImageViewer={handleImageViewer} />
        <CityStats />
        {shouldImageViewerOpen && (
          <ImageViewer
            imagename={imageName}
            handleImageViewerClose={handleImageViewerClose}
          />
        )}
        <PublicUtilities
          openBankModal={openBankModal}
          openCollegeModal={openCollegeModal}
          openElectricModal={openElectricModal}
          openHospitalModal={openHospitalModal}
          openMunicipalityModal={openMunicipalityModal}
          openNGOsModal={openNGOsModal}
          openPostalModal={openPostalModal}
          openSchoolsModal={openSchoolsModal}
          openBloodBanksModal={openBloodBanksModal}
          openAmbulanceModal={openAmbulanceModal}
          openDiagnosticCentreModal={openDiagnosticCentreModal}
        />
        <Bank isOpen={isBankModalOpen} onClose={closeBankModal} />
        <Colleges
          isitOpen={isCollegeModalOpen}
          onClosethis={closeCollegeModal}
        />
        <Electric
          isitOpen={isElectricityModalOpen}
          onClosethis={closeElectricModal}
        />
        <Hospital
          isitOpen={isHospitalModalOpen}
          onClosethis={closeHospitalModal}
        />
        <Municipalities
          isitOpen={isMunicipalityModalOpen}
          onClosethis={closeMunicipalityModal}
        />
        <NGOs isitOpen={isNGOsModalOpen} onClosethis={closeNGOsModal} />
        <Postal isitOpen={isPostalModalOpen} onClosethis={closePostalModal} />
        <Schools
          isitOpen={isSchoolsModalOpen}
          onClosethis={closeSchoolsModal}
        />
        <BloodBanks
          isitOpen={isBloodBanksModalOpen}
          onClosethis={closeBloodBanksModal}
        />
        <Ambulance
          isitOpen={isAmbulanceModalOpen}
          onClosethis={closeAmbulanceModal}
        />
        <DiagnosticCentre
          isitOpen={isDiagnosticCentreModalOpen}
          onClosethis={closeDiagnosticCentreModal}
        />
      </div>
    </>
  );
}

export default App;
