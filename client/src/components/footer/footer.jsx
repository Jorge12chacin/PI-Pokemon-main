import "./footer.css";
import GitLogo from "./GitLogo.png";
import LinkedInLogo from "./LinkedInLogo.png";
import Gmail from "./Gmail.png";
import ProfileFoto from "./ProfileFoto.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-name">
        <h4>developer</h4>

        <div className="developer-info">
          <a
            className="info"
            href="https://www.instagram.com/jorge12chacin/"
            target="_blank"
          >
            <img className="profile-logo" src={ProfileFoto}></img>
            <h3>Jorge Chacin</h3>
          </a>
        </div>
      </div>
      <label className="cname">Contact:</label>
      <div className="contactInfo">
        <a href="https://github.com/Jorge12chacin" target="_blank">
          <img className="img-logos" src={GitLogo}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/jorge-chacin-615072b2/"
          target="_blank"
        >
          <img className="img-logos" src={LinkedInLogo}></img>
        </a>
        <a href="mailto: jorge12chacin@gmail.com">
          <img className="img-logos" src={Gmail}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
