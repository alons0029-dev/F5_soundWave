
// Components
import Header from "../../components/Molecules/Header/Header.jsx";
import DiscoverMain from "../../components/Molecules/DiscoverMain/DiscoverMain.jsx";
import Footer from "../../components/Molecules/Footer/Footer.jsx";

// Images
import albumCovers from "../../assets/album-covers.png";

// Style
import "./discover.css";

/* FUNCTIONALITY */
function Discover() {
  return (
    <>
      <Header />
      <div className="discover-content-container">
        <DiscoverMain />
        <img className="album-covers-image" src={albumCovers} alt="album-showcase" />
      </div>
      <Footer />
    </>
  )
}

export default Discover