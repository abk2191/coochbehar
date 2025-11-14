function Sidebar() {
  const handleClick = () => {
    alert("This section is under construction. Coming soon!");
  };

  const sidebarItems = [
    "Home",
    "Important Places",
    "Places Nearby",
    "Events",
    "Photos",
    "Contact",
  ];
  return (
    <>
      <div className="sidebar">
        <ul>
          {sidebarItems.map((items) => (
            <li key={items} className="sidebar-items">
              <a onClick={handleClick}>{items}</a>
            </li>
          ))}
        </ul>
        <div className="developer">
          <p>Designed by ABHISHEK KABI</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
