import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-head">
        <p className="footer-p-big">Let’s work together.</p>
        <p className="footer-p-small">
          Creating user experience and visual appealing design
        </p>
      </div>

      <div className="links-div">
        <Link to="/hireMe">
          <button className="menu-btn">
            <span>+</span> Hire Me
          </button>
        </Link>
        <button className="menu-btn">
          <i className="fi fi-rr-copy" /> Copy Email
        </button>
      </div>

      <div className="follow-div">
        <p>
          <div className="grey-dot"></div>Follow Me
        </p>
        <div className="f-icons">
          <i className="fi fi-brands-twitter-alt"></i>
          <i className="fi fi-brands-instagram"></i>
          <i className="fi fi-rr-basketball"></i>
          <i className="fi fi-brands-linkedin"></i>
        </div>
      </div>

      <div className="bot-f">
        <p>© 2025 Subtle Folio – Framer Template</p>
        <p>
          by <span>Muhammadumar</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
