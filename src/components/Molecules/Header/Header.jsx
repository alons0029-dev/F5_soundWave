
// Components
import { NavLink } from "react-router-dom";
import SoundwaveLogo from "../../Atoms/SoundwaveLogo/SoundwaveLogo.jsx";

// Style
import "./header.css";

// Functionality
function Header() {
  return (
    <div className="header-container">
        <NavLink className="soundwave-home-link" to="/">
            <SoundwaveLogo />
        </NavLink>
        <nav className="header-navbar-container">
            <NavLink to="/discover" className="header-navbar-element">Discover</NavLink>
            <NavLink to="/join" className="header-navbar-element">Join</NavLink>
        </nav>
    </div>
  )
}

export default Header