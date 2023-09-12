import React from "react";
import "./Navbar.css";

function NavBar({ setGroupingOption }) {
  const handleGroupingChange = (choice) => {
    setGroupingOption(choice);
  };

  return (
    <div className="navbar">
      <button onClick={() => handleGroupingChange("status")}>
        Group by Status
      </button>
      <button onClick={() => handleGroupingChange("priority")}>
        Group by Priority
      </button>
      <button onClick={() => handleGroupingChange("userId")}>
        Group by User
      </button>
    </div>
  );
}

export default NavBar;
