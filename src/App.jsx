import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CityDescription from "./CityDescription";
import Sidebar from "./Sidebar";

function App() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);

  function handleSidebarToggle() {
    setSideBarVisibility((prev) => !prev);
  }
  return (
    <>
      <Navbar handleSidebarToggle={handleSidebarToggle} />
      <Banner />
      <CityDescription />
      {sideBarVisibility && <Sidebar />}
    </>
  );
}

export default App;
