// import "./components/HomePage.css";
import "../components/HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo-section">
          <img src="../assets/images/brand-logo" alt="" />
        </div>
        <div className="navList">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Sites</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
