
// REACT-ROUTER-DOM Components
import { Link } from "react-router-dom";

// Images
import twitterIcon from "../../../assets/icons/twitter.png";
import facebookIcon from "../../../assets/icons/facebook.png";

// Style
import "./footer.css";

/* FUNCTIONALITY */
const Footer = () => {
  return (
    <div className="footer-container">
        <section className="footer-help-container">
            <nav className="footer-help-section">
                <Link to="https://github.com/alons0029-dev/F5_soundWave">
                    <p className="footer-help-element">About Us</p>
                </Link>
                <Link to="https://github.com/alons0029-dev">
                    <p className="footer-help-element">Contact</p>
                </Link>
            </nav>
        </section>
        <section className="footer-social-section">
            <Link to="https://x.com/">
                <div className="social-network-element">
                    <img className="social-icon" src={twitterIcon} alt="twitter-old-icon" />
                    <p>Twitter</p>
                </div>
            </Link>
            <Link to="https://www.facebook.com/">
                <div className="social-network-element">
                    <img className="social-icon" src={facebookIcon} alt="facebook-icon" />
                    <p>Facebook</p>
                </div>
            </Link>
        </section>
    </div>
  )
}

export default Footer