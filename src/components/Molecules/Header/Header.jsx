
// REACT-ROUTER-DOM Component
import { Link } from "react-router-dom";

// Components
import SoundwaveLogo from "../../Atoms/SoundwaveLogo/SoundwaveLogo.jsx";

// Style
import "./header.css";

/* FUNCTIONALITY */
function Header() {
  return (
    <div className="header-container">
        <Link className="soundwave-home-logo" to="/">
            <SoundwaveLogo />
        </Link>
        <nav className="header-navbar-container">
            <Link to="/discover" className="header-navbar-element">Discover</Link>
            <Link to="/join" className="header-navbar-element">Join</Link>
        </nav>
    </div>
  )
}

export default Header