function Sidebar() {
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
              <a href="">{items}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
