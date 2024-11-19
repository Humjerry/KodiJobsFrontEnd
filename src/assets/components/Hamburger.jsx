import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../components/hamburgersty.css";
import { Link } from "react-router-dom";

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
              <Link to={"/"}>
                
                <li>Home</li>
              </Link>
              <Link to={"/FirstCard"}>
                {" "}
                <li>Jobs</li>
              </Link>
              <Link to={"/SecondCard"}>
                {" "}
                <li>Categories</li>
              </Link>
              <Link to={"/Contactform"}>
                {" "}
                <li>Contact Us</li>
              </Link>
              <Link to={"/TestimonialCrad"}>
                {" "}
                <li>Testimonials</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default SlidingMenu;
