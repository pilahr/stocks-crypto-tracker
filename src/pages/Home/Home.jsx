import React from "react";
import "./Home.scss";
import TopNav from "../../components/TopNav/TopNav";

const Home = () => {
  return (
    <div className="homepage">
      <div>
        <TopNav page="homepage" textColor="white" textColor2="white" />
      </div>
      <div className="homepage-wrap">
        <div className="homepage__text">
          <h1 className="homepage__text--h1">Track your stocks</h1>
          <h1 className="homepage__text--h1">and cryptocurrencies</h1>
          <h1 className="homepage__text--h1">in a single portfolio</h1>
        </div>
        <div className="homepage__appPicture">
          <img className="homepage__appPicture--appPic"
            src="https://opusrs-my.sharepoint.com/:i:/r/personal/piyaporn_lahr_nology_io/Documents/Photos%20for%20project/61533EFA-5EC9-4198-ABAC-A86C1B064CD1_1_201_a.jpeg?csf=1&web=1&e=Lp1rlh"
            alt="tracker image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
