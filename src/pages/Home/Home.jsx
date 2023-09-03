import React from "react";
import "./Home.scss";
import TopNav from "../../components/TopNav/TopNav";

const Home = () => {
  return (
    <div className="homepage">
      <div>
        <TopNav page="blue" textColor="white" textColor2="white" />
      </div>
      <div className="homepage-wrap">
        <div className="homepage__text">
          <h1 className="homepage__text--h1">Track your stocks</h1>
          <h1 className="homepage__text--h1">and cryptocurrencies</h1>
          <h1 className="homepage__text--h1">in a single portfolio</h1>
        </div>
        <div className="homepage__appPicture">
          <img
            className="homepage__appPicture--appPic"
            src="https://ibb.co/dMn3Jh2"
            alt="tracker"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
