
import SoundwaveIcon from "../../../assets/icons/soundwave.png";
import "./soundwave-logo.css";

function SoundwaveLogo() {
  return (
    <div className="soundwave-icon-container">
        <img className="soundwave-icon" src={SoundwaveIcon} alt="Soundwave Icon" />
        <p className="soundwave-icon-text">Soundwave</p>
    </div>
  )
}

export default SoundwaveLogo