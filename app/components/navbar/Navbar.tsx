"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/ar-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="Nav_container">
      {/* Logo */}
      <div className="Nav_img_div">
        <Link href="/">
          <Image src={logo} alt="AR designer logo" className="logo" />
        </Link>
      </div>

      {/* Links */}
      <div className="Nav_link_div">
        <Link href="/pages/category/trending" className="Nav_link">TRENDING</Link>
        <span className="divison_line"> |</span>
        <Link href="/pages/category/suits" className="Nav_link">SUITS</Link>
        <span className="divison_line"> |</span>
        <Link href="/pages/category/shirts" className="Nav_link">SHIRTS</Link>
        <span className="divison_line"> |</span>
        <Link href="/pages/category/kameez-shalwar" className="Nav_link">TRADITIONAL WEAR</Link>
        <span className="divison_line"> |</span>
        <Link href="/pages/category/sherwani" className="Nav_link">SHERWANI</Link>
      </div>

      {/* Buttons */}
      <div className="Nav_search_login_cart_div">
        <Link href="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="nav_buttons" />
        </Link>

        {/* User Dropdown */}
        <div className="dropdown-wrapper" style={{ position: "relative" }} ref={dropdownRef}>
          <div
            onClick={toggleDropdown}
            className="nav_buttons"
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faUser} />
          </div>

          {dropdownOpen && (
            <div
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                background: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "5px",
                borderRadius: "6px",
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Link href="/pages/login">
                <button className="dropdown-button">Login</button>
              </Link>
              <Link href="/pages/signup">
                <button className="dropdown-button">Sign Up</button>
              </Link>
            </div>
          )}
        </div>

        <Link href="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="nav_buttons" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
