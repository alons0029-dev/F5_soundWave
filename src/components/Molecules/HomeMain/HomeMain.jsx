
// REACT-ROUTER-DOM Components
import { Link } from "react-router-dom";

// Components
import HomePageTitle from "../../Atoms/HomePageTitle/HomePageTitle";
import HomePageInfo from "../../Atoms/HomePageInfo/HomePageInfo";

// Style
import "./home-main.css";

const HomeMain = () => {
  return (
    <div className="home-main-container">
        <HomePageTitle />
        <HomePageInfo />
        <Link to="/join">
          <button className="home-main-btn">Join Now</button>
        </Link>
    </div>
  )
}

export default HomeMain