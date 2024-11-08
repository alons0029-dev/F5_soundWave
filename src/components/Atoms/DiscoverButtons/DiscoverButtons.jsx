
// Images
import microphoneIcon from "../../../assets/icons/microphone.png";
import albumsIcon from "../../../assets/icons/albums.png";
import arrowIcon from "../../../assets/icons/right-arrow.png";

// Style
import "./discover-buttons.css";

/* FUNCTIONALITY */
const DiscoverButtons = () => {
  return (
    <div className="discover-buttons-container">
        <div className="discover-button-style">
            <img className="discover-button-icon" src={microphoneIcon} alt="charts-icon" />
            <p className="discover-button-text">Charts</p>
        </div>
        <div className="discover-button-style">
            <img className="discover-button-icon" src={albumsIcon} alt="albums-icon" />
            <p className="discover-button-text">Albums</p>
        </div>
        <div className="discover-button-style">
            <img className="discover-button-icon" src={arrowIcon} alt="more-icon" />
            <p className="discover-button-text">More</p>
        </div>
    </div>
  )
}

export default DiscoverButtons