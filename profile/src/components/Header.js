import icon from "./../resources/img/icon.png";
import "./../resources/css/Header.css";

function Header() {
  return (
    <div className=" Header">
      <div>
        <img className="HeaderIcon" src={icon} alt="profile Icon"></img>
      </div>
      <h1 className="projectButton">Works</h1>
      <h1 className="About">About</h1>
      <h1 className="Contact">Contact</h1>
    </div>
  );
}

export default Header;
