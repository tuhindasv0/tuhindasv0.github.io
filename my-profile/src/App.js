import React from 'react';
import profilePic from './resource/img/profilePic.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} className="profile-pic" alt="Profile pic" />
        <p>
          Hi, I am Tuhin Das
          <br>
          </br>
          Thanks for Being here, Feel free to explore my works</p> 
       
      </header>
    </div>
  );
}

export default App;
