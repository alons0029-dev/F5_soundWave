import soundwaveLogo from '../../assets/icons/soundwave.png';
import './pageHeader.css';

function PageHeader() {
    return (
      <>
        <header className="header-style">
          <nav className="navbar-style">
            <div className="header-logo">
              <img src={soundwaveLogo} alt="Soundwave Logo" className="header-logo-icon"/>
              <p className="header-logo-text">Soundwave</p>
            </div>
            <ul className="navbar-pages">
              <li>Discover</li>
              <li>Join</li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
  
  export default PageHeader