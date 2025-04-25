'use client';
import "./footer.css";
import Image from "next/image";
import logo from "../../assets/images/ar-logo.jpg";
import mastercard from "../../assets/images/mc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram ,faCcVisa } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer_w_container">
      <div className="footer_main_container">
        {/* logo side */}
        <div className="footer_logo_container">
          <Image src={logo} alt="AR designer logo" className="footer_logo" />
          <p className="footer_logo_text">AR Designer</p>
        </div>
        {/* logo side end */}

        {/* pages side  */}
        <div className="footer_middle_links_container">
          <p className="links_section_headings">Pages</p>
          <hr className="hr_line_margin" />
          <ul className="footer_links">Trending</ul>
          <ul className="footer_links">SUITS</ul>
          <ul className="footer_links">SHIRTS</ul>
          <ul className="footer_links">TRADITIONAL WEAR</ul>
          <ul className="footer_links">SHERWANI</ul>
        </div>
        {/* pages side end */}

        {/* category side  */}
        <div className="footer_middle_links_container">
          <p className="links_section_headings">Catergories</p>
          <hr className="hr_line_margin" />
          <ul className="footer_links">Kameez Shalwar</ul>
          <ul className="footer_links">2 Piece and 3 Piece</ul>
          <ul className="footer_links">Casual Shirts</ul>
          <ul className="footer_links">Formal Shirts</ul>
          <ul className="footer_links">Groom Sherwani</ul>
          <ul className="footer_links">Event Wear Sherwani</ul>
          <ul className="footer_links">Party Wear Sherwani</ul>
        </div>
        {/* category side end */}

        {/* customer service side  */}
        <div className="footer_middle_links_container">
          <p className="links_section_headings">Services</p>
          <hr className="hr_line_margin" />
          <ul className="footer_links">Shipping Handling</ul>
          <ul className="footer_links">Exchange & Return</ul>
          <ul className="footer_links">Privacy & Policy</ul>
          <ul className="footer_links">FAQs</ul>
        </div>
        {/* customer service side end  */}

        {/* social and info   */}
        <div className="footer_middle_links_container">
          <p className="links_section_headings">Follow Us</p>
          <hr className="hr_line_margin" />
          <div className="footer_social_container">
            <div className="footer_social_icons_container">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#ebebeb", fontSize: "70px" }}
                className="social_icon"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ebebeb", fontSize: "70px" }}
                className="social_icon"
              />
            </div>
            <div>
              <p className="links_section_headings">Contact Us</p>
              <hr className="hr_line_margin" />
              <p style={{textAlign:"center" , color:"var(--hovering-effect)"}}>ardesigner@gmail.com</p>
              <p style={{textAlign:"center" , color:"var(--hovering-effect)"}}>+92 123456789</p>
            </div>
          </div>
        </div>
        {/* social and info  end  */}
      </div>
      <div className="footer_bottom_container">
        <div>
            <p className="footer_links">copyright @ 2025 AR Designer. All Rights Reserved</p>
        </div>
        <div className="footer_payment_container">
        <FontAwesomeIcon icon={faCcVisa} style={{color: "#e11432", fontSize:"50px"}} />
        <Image src={mastercard} alt="master card logo" className="mastercard"/>
        </div>

      </div>
    </div>
  );
};

export default Footer;
