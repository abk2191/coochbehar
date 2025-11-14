import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CityDescription from "./CityDescription";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CityDescription />
      <Sidebar />
    </>
  );
}

export default App;
