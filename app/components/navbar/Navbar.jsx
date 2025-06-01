"use client";
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
  return (
    <div className="Nav_container">
      {/* logo */}
      <div className="Nav_img_div">
        <Link href="/"><Image src={logo} alt="AR designer logo" className="logo" /></Link>
      </div>

      {/* links */}
      <div className="Nav_link_div">
        <Link href="/pages/category/trending" className="Nav_link">
          TRENDING
        </Link><span className="divison_line"> |</span>
        <Link href="/pages/category/suits" className="Nav_link">
          SUITS
        </Link><span className="divison_line"> |</span>
        <Link href="/pages/category/shirts" className="Nav_link">
          SHIRTS
        </Link><span className="divison_line"> |</span>
        <Link href="/pages/category/kameez-shalwar" className="Nav_link">
          TRADITIONAL WEAR
        </Link><span className="divison_line"> |</span>
        <Link href="/pages/category/sherwani" className="Nav_link">
          SHERWANI
        </Link>
      </div>

      {/* buttons */}
      <div className="Nav_search_login_cart_div">
        <Link href="/search"> <FontAwesomeIcon icon={faMagnifyingGlass} className="nav_buttons" /></Link>
        <Link href="/account"> <FontAwesomeIcon icon={faUser} className="nav_buttons" /></Link>
        <Link href="/cart"> <FontAwesomeIcon icon={faCartShopping} className="nav_buttons" /></Link>
      </div>
    </div>
  );
};

export default Navbar;