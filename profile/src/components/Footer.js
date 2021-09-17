
var { SocialIcon } = require("react-social-icons");
function Footer() {
  return (
    <div className="Footer">
      <div className="ItemPlacement">
        Copyright &#169; Tuhin Das. All rights reserved
      </div>
      <br></br>
      <br></br>
      <div className="LogoPlacement">
        <SocialIcon url="https://linkedin.com/" />
        <SocialIcon url="https://twitter.com/" />
        <SocialIcon url="https://facebook.com/" />
        <SocialIcon url="https://youtube.com/" />
        <SocialIcon url="https://Github.com/tuhindasv0" />
      
        
      </div>
    </div>
  );
}

export default Footer;
