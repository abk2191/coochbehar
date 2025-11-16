function Navbar({ handleSidebarToggle, sideBarVisibility }) {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <div className="menu-btn-div">
            <button className="menu-btn" onClick={handleSidebarToggle}>
              {sideBarVisibility ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
          <div className="logo-text">
            <h3>COOCHBEHAR</h3>
          </div>
          <div className="placeholder-div"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
