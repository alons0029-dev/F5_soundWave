
// Components
import DiscoverPageTitle from "../../Atoms/DiscoverPageTitle/DiscoverPageTitle";
import DiscoverButtons from "../../Atoms/DiscoverButtons/DiscoverButtons";
import DiscoverPageInfo from "../../Atoms/DiscoverPageInfo/DiscoverPageInfo";

// Style
import "./discover-main.css";

/* FUNCTIONALITY */
const DiscoverMain = () => {
  return (
    <div className="discover-main-container">
        <DiscoverPageTitle />
        <DiscoverButtons />
        <DiscoverPageInfo />
    </div>
  )
}

export default DiscoverMain