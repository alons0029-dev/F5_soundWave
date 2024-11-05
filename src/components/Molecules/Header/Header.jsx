
// REACT-ROUTER-DOM Component
import { NavLink } from "react-router-dom";

// Components
import SoundwaveLogo from "../../Atoms/SoundwaveLogo/SoundwaveLogo.jsx";

// Style
import "./header.css";

/* FUNCTIONALITY */
function Header() {
  return (
    <div className="header-container">
        <NavLink className="soundwave-home-logo" to="/">
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