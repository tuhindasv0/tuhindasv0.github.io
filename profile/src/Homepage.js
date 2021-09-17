import "./App.css";
import { Fragment } from "react";

import Footer from "./components/Footer";
import logo from "./resources/img/profile.jpeg";
import TextLoop from "react-text-loop";

const Homepage = () => {
  return (
    <Fragment>
      <div>
        <Footer />
        <div>
          <img className="profilePic" src={logo} alt="profile pic"></img>
        </div>

        <div className="profileHeader">
          <h2>
            I am <br></br>
            <TextLoop>
              <span> AWS </span>

              <span> Java</span>
              <span> React </span>
            </TextLoop>{" "}
            <br></br>
            Developer
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
