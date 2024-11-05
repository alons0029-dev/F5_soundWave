
// Images 
import SoundwaveIcon from "../../../assets/icons/soundwave.png";

// Style
import "./soundwave-logo.css";

/* FUNCTIONALITY */
function SoundwaveLogo() {
  return (
    <div className="soundwave-logo-container">
        <img className="soundwave-icon" src={SoundwaveIcon} alt="Soundwave Icon" />
        <p className="soundwave-icon-text">Soundwave</p>
    </div>
  )
}

export default SoundwaveLogo