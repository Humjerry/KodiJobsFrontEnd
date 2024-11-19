import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../components/hamburgersty.css";

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // To control slide-out animation

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="menu-container">
      <RxHamburgerMenu cursor={"pointer"} onClick={toggleMenu} size={24} />
      {isOpen && (
        <div
          className={`menu-content ${isAnimating ? "slide-out" : "slide-in"}`}
        >
          <button className="close-btn" onClick={toggleMenu}>
            ✕
          </button>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default SlidingMenu;
