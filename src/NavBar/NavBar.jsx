import React, { useState, useEffect } from "react";
import "./NavBar.css"; // Import your custom CSS
import Logo from "../assets/images/Logo.png";
import MenuBars from "../assets/images/burger-bar.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <div className={`container p-0 ${scrolled ? "scrolled" : ""}`}>
      <nav className=" navbar navbar-expand-lg d-flex justify-content-between position-relative">
        {/* Logo and Brand */}
        <div className="Logo d-flex justify-content-center align-items-center gap-2 p-3">
          <img src={Logo} width="18" className="d-inline" alt="Logo" />
          <a className="navbar-brand" href="#">
            my Dream Place
          </a>
        </div>

        {/* Desktop Links and Buttons */}
        <div className="Links d-flex gap-4 d-none d-lg-flex">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Discover
          </a>
          <a className="nav-link" href="#">
            Activities
          </a>
          <a className="nav-link" href="#">
            About
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
        </div>

        {/* Desktop Register/Sign In Buttons */}
        <div className="register d-flex gap-2 d-none d-lg-flex">
          <button className="btn border border-primary">Register</button>
          <button className="btn btn-primary">Sign In</button>
        </div>

        {/* Mobile Burger Button */}
        <div className="burger d-lg-none p-3">
            <img
              src={MenuBars}
              width="30"
              height="30"
              alt="Menu"
              onClick={() => {
                setIsOpen(true);
              }}
              aria-expanded={isOpen ? "true" : "false"}
            />

        </div>

        {/* Vertical Mobile Menu */}
        {isOpen ? (
          <div className="mobile-navbar-collapse container d-lg-none">
            <ul className="navbar-nav me-auto mb-2 px-3 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Activities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a href="" className="nav-link">
                  Register
                </a>
              </li>

              <li className="nav-item">
                <a href="" className="nav-link">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
