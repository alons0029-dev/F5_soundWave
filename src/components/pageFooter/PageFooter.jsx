import './pageFooter.css';
import twitterLogo from '../../assets/icons/twitter.png';
import facebookLogo from '../../assets/icons/facebook.png';

function PageFooter() {
    return (
      <>
        <footer className='footer-container'>
            <section className="contact-info">
                <nav className="footer-contact-info-nav">
                  <p className="about-us">About Us</p>
                  <p className="contact">Contact</p>
                </nav>
            </section>
            <section className="social-networks">
                <nav className="footer-social-network-nav">
                  <div className="social-twitter-container">
                    <img src={twitterLogo} alt="twitter-logo" />
                    <p className="twitter-text">Twitter</p>
                  </div>
                  <div className="social-facebook-container">
                    <img src={facebookLogo} alt="facebook-logo" />
                    <p className="facebook-text">Facebook</p>
                  </div>
                </nav>
            </section>
        </footer>
      </>
    )
  }
  
  export default PageFooter