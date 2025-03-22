import { Link } from "react-router-dom";
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
        <img src={logo} alt="AR designer logo" className="logo" />
      </div>

      {/* links */}
      <div className="Nav_link_div">
        <Link to="/trending" className="Nav_link">
          TRENDING
        </Link><span className="divison_line"> |</span>
        <Link to="/suits" className="Nav_link">
          SUITS
        </Link><span className="divison_line"> |</span>
        <Link to="/shirts" className="Nav_link">
          SHIRTS
        </Link><span className="divison_line"> |</span>
        <Link to="/traditional-wear" className="Nav_link">
          TRADITIONAL WEAR
        </Link><span className="divison_line"> |</span>
        <Link to="/sherwani" className="Nav_link">
          SHERWANI
        </Link>
      </div>

      {/* buttons */}
      <div className="Nav_search_login_cart_div">
        <Link to="/"> <FontAwesomeIcon icon={faMagnifyingGlass} className="nav_buttons" /></Link>
        <Link to="/"> <FontAwesomeIcon icon={faUser} className="nav_buttons" /></Link>
        <Link to="/"> <FontAwesomeIcon icon={faCartShopping} className="nav_buttons" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
