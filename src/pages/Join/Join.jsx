
// Components
import Header from "../../components/Molecules/Header/Header.jsx";
import JoinTitleSection from "../../components/Organisms/JoinTitleSection/JoinTitleSection.jsx";
import JoinFormSection from "../../components/Organisms/JoinFormSection/JoinFormSection.jsx";
import Footer from "../../components/Molecules/Footer/Footer.jsx";

// Style
import "./join.css";

/* FUNCTIONALITY */
function Join() {
  return (
    <div className="join-page-container">
      <Header />
      <main className="join-content-container">
        <JoinTitleSection />
        <JoinFormSection />
      </main>
      <Footer />
    </div>
  )
}

export default Join