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

function App() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);
  const [imageName, setImageName] = useState("");
  const [shouldImageViewerOpen, setShouldImageViewerOpen] = useState(false);

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
      </div>
    </>
  );
}

export default App;
