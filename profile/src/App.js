import logo from "./resources/img/profile.jpeg";
import TextLoop from "react-text-loop";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <div className="profilePic">
        <img src={logo} alt="profile pic" height="200px" width="auto"></img>
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
  );
}

export default App;
