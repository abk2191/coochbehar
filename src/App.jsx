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

function App() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);
  const [imageName, setImageName] = useState("");
  const [shouldImageViewerOpen, setShouldImageViewerOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
  const [isElectricityModalOpen, setIsElectricityModalOpen] = useState(false);
  const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false);

  const openBankModal = () => setIsBankModalOpen(true);
  const closeBankModal = () => setIsBankModalOpen(false);

  const openCollegeModal = () => setIsCollegeModalOpen(true);
  const closeCollegeModal = () => setIsCollegeModalOpen(false);

  const openElectricModal = () => setIsElectricityModalOpen(true);
  const closeElectricModal = () => setIsElectricityModalOpen(false);

  const openHospitalModal = () => setIsHospitalModalOpen(true);
  const closeHospitalcModal = () => setIsHospitalModalOpen(false);

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
          onClosethis={closeHospitalcModal}
        />
      </div>
    </>
  );
}

export default App;
