import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

function Sidebar({ handleRadioInput }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-menu-icon">
        <button className="hamburger-menu" onClick={handleMenu}>
          {isOpen ? <AiOutlineClose /> : <CiMenuFries />}
        </button>
      </div>
      <div className={`sidebar-container ${isOpen && "open"}`}>
        <div className="sidebar-logo">
          <h1>🛒</h1>
        </div>
        <div className="sidebar-input-section">
          <Category handleRadioInput={handleRadioInput} />
          <Price handleRadioInput={handleRadioInput} />
          <Colors handleRadioInput={handleRadioInput} />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
