import homePageWoman from "../../assets/landing-page-girl.png";
import './pageHome.css';

function PageHome() {
    return (
    <main className="main-page-container">
        <section className="main-left-section">
            <img className="main-page-woman" src={homePageWoman} alt="Image of a woman" />
        </section>
        <section className="main-right-section">
            <section className="main-right-section-info">
                <h1 className="main-right-section-title">Feel the Music</h1>
                <p className="main-right-section-text">Stream over 20 thousand songs with <strong>one click</strong>.</p>
            </section>
            <section className="main-right-section-action">
                <button type="button" className="main-right-section-button">Join Now</button>
            </section>
        </section>
    </main>
  )
}

export default PageHome