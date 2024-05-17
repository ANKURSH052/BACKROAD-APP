import { MenuItem, socialMediaIcons } from "../data";
import logo from "../assets/images/images/logo.svg";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {MenuItem.map((menu) => (
              <li>
                <a href={menu.link} className="nav-link">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="nav-icons">
            {socialMediaIcons.map((item) => (
              <li>
                <a href={item.link} target="_blank" className="nav-icon">
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>

          {/* <ul className="nav-icons">
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  );
};
export default NavBar;
