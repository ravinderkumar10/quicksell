import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

function NavBar({ setGroupingOption }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };
  const handleGroupingChange = (choice) => {
    setGroupingOption(choice);
  };

  const handleClickOutside = event => {
    if (
      dropdownRef.current && 
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="navbar">
    <button ref={buttonRef} onClick={toggleDropdown}>Display</button>
      {dropdownVisible && (
        <div className="dropdown" ref={dropdownRef}>
        <div className="dropdown-item">
            <span className="dropdown-label">Grouping</span>
            
            <button onClick={() => handleGroupingChange("status")}>Status</button>
          </div>
          <div className="dropdown-item">
            <span className="dropdown-label">Ordering</span>
            <button onClick={() => handleGroupingChange("priority")}>Priority</button>
          </div>
          <div className="dropdown-item">
            <span className="dropdown-label">Group By:</span>
            <button onClick={() => handleGroupingChange("userId")}>User</button>
          </div>


          
          
         
        </div>
      )}
      
    </div>
  );
}

export default NavBar;
