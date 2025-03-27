"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/arlogo.jpg";
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
        <Image src={logo} alt="AR designer logo" className="logo" />
      </div>

      {/* links */}
      <div className="Nav_link_div">
        <Link href="/trending" className="Nav_link">
          TRENDING
        </Link><span className="divison_line"> |</span>
        <Link href="/suits" className="Nav_link">
          SUITS
        </Link><span className="divison_line"> |</span>
        <Link href="/shirts" className="Nav_link">
          SHIRTS
        </Link><span className="divison_line"> |</span>
        <Link href="/traditional-wear" className="Nav_link">
          TRADITIONAL WEAR
        </Link><span className="divison_line"> |</span>
        <Link href="/sherwani" className="Nav_link">
          SHERWANI
        </Link>
      </div>

      {/* buttons */}
      <div className="Nav_search_login_cart_div">
        <Link href="/"> <FontAwesomeIcon icon={faMagnifyingGlass} className="nav_buttons" /></Link>
        <Link href="/"> <FontAwesomeIcon icon={faUser} className="nav_buttons" /></Link>
        <Link href="/"> <FontAwesomeIcon icon={faCartShopping} className="nav_buttons" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
