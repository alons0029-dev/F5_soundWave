
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
        <button className="home-main-btn">Join Now</button>
    </div>
  )
}

export default HomeMain