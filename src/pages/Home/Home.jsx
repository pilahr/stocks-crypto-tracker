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
          <img className="homepage__appPicture--appPic"
            src="https://previews.dropbox.com/p/thumb/AB91Cl2zvoIie0H3P6ADr-JhBofuVlGP5rKG2Fyd22LxQDIYxtsGtiP6WeZbFyHl2BbFnKoQOkq5Qyuew1OXrqNg-aFb9f-SJVMLEmfhmZVM_yBEbvwy1Biu0uJSWfW7RuSlfvnEcU5OAh0rHbTTgRBnln8k06mJVuVWNF5CDubtmWMyp9_5LHGLDzf_Y8BnHECMzmKm4YIQKb2BT2_E3TVNbFfxL5CBxAqbPyDKt1Lemfy5SI9fhu6gA0iGGSZM1rEjGZJQOuB4eWtnrIkZ3EekICgAIgYbOxgYbwkWNL85WGwwuHqoIU8L1akY0VcXU-YA58YMENUP0AdHYl9Tma3L/p.jpeg"
            alt="tracker"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
