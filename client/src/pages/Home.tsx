import "./styleSheet/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import CategoryProduct from "../components/categoryProduct/CategoryProduct";
import trend1 from "../assets/images/multi1.jpg";
import trend2 from "../assets/images/trend1.png";
import trend3 from "../assets/images/trend2.png";

export const Home = () => {
  return (
    <div>
      {/*                     carousal               */}
      <div></div>

      {/*                     category products              */}
      <div className="section_heading_div">
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
        <p className="section_text">Categories</p>
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
      </div>
      <div className="category_product_div">
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
      </div>

      {/*                     Trending               */}
      <div className="section_heading_div">
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
        <p className="section_text">Trending</p>
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
      </div>
      <div className="trending_container">
        <div className="trend_col1_div">
          <img src={trend1} alt="" className="col1_img" />
          <Link to="/" className="col1_btn">View More</Link>
        </div>
        <div className="trend_col2_div">
          <img src={trend2} alt="" className="col2_img"/>
          <img src={trend3} alt="" className="col2_img"/>
        </div>
      </div>
    </div>
  );
};
