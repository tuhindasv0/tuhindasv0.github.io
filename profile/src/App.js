import logo from './resources/img/profile.jpeg';
import TextLoop from "react-text-loop";
import Link from "react-router-dom";
import './App.css';

function App() {
  return (
   
    <div>
      <div className="profilePic">
        <img src={logo} alt="profile pic" height="200px" width="auto"></img>
        </div>
        <div className="profileHeader">

        <h2>
          I am <br></br>
                        <TextLoop>
                            <span> AWS </span>
                            
                            <span> Java </span>
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
