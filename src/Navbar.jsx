function Navbar({ handleSidebarToggle }) {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <div className="menu-btn-div">
            <button className="menu-btn" onClick={handleSidebarToggle}>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          <h3>COOCHBEHAR</h3>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
