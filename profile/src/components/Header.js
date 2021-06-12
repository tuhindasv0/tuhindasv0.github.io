import icon from "./../resources/img/icon.png";
import "./../resources/css/Header.css";

function Header() {
  return (
    <div className=" Header">
      <div>
        <img className="HeaderIcon" src={icon} alt="profile Icon"></img>
      </div>
      <button className="projectButton">Projects</button>
    </div>
  );
}

export default Header;
