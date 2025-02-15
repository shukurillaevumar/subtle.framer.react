import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="navigation-panel">
        <Link to="/">
          <i className="fi fi-rr-house-blank" />
        </Link>
        <Link to="/aboutMe">
          <i className="fi fi-rr-circle-user" />
        </Link>
        <Link to="/projects">
          <i className="fi fi-rr-table-layout" />
        </Link>
        <Link to="/products">
          <i className="fi fi-rr-box" />
        </Link>
      </div>
      <div className="theme-panel">
        <i className="fi fi-rr-sun" />

        <Link to="/hireMe">
          <button className="menu-btn">
            <span>+</span> Hire Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
