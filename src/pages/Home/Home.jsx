
// Components
import Header from "../../components/Molecules/Header/Header.jsx";
import HomeMain from "../../components/Molecules/HomeMain/HomeMain.jsx";

// Images
import homeImage from "../../assets/landing-page-girl.png";

// Style
import "./home.css";

/* FUNCTIONALITY */
function Home() {
  return (
    <>
      <Header />
      <div className="home-content-container">
        <img src={homeImage} alt="girl-background-image" />
        <HomeMain />
      </div>
    </>
  )
}

export default Home