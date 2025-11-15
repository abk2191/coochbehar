import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CityDescription from "./CityDescription";
import Sidebar from "./Sidebar";
import SecondBanner from "./SecondBanner";
import CityStats from "./CityStats";

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
      <CityDescription />
      {sideBarVisibility && <Sidebar />}
      <SecondBanner />
      <CityStats />
    </>
  );
}

export default App;
