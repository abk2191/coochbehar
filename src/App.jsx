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

function App() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);

  function handleSidebarToggle() {
    setSideBarVisibility((prev) => !prev);
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
        <CobPalace />
        <KochDynasty />
        <SecondBanner />
        <MadanMohan />
        <CityStats />
      </div>
    </>
  );
}

export default App;
