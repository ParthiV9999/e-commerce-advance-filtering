import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineUserAdd, AiOutlineClose } from "react-icons/ai";
import { PiDotsThreeOutline } from "react-icons/pi";

import "./Nav.css";
import { useState } from "react";

function Nav({ handleSearchInput, query }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="navbar flex-cc p-1">
      <div className="container flex-csb">
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={handleSearchInput}
            placeholder="Enter your search shoes"
          />
        </div>
        <div className="nav-menu-icon">
          <button className="hamburger-menu" onClick={handleMenu}>
            {isOpen ? <AiOutlineClose /> : <PiDotsThreeOutline />}
          </button>
        </div>
        <div className={`nav-icon ${isOpen && "nav-icon-open"}`}>
          <span>
            <FiHeart />
          </span>
          <span>
            <IoCartOutline />
          </span>
          <span>
            <AiOutlineUserAdd />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
