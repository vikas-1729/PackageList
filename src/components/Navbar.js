import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="nav">
        <div className="left-div">
          {/* <img className="logo" src="/assest/images/logo.png" alt="logo" /> */}
        </div>
        <div className="middle-div">
          <span>abc</span>
        </div>
        <div className="right-div nav-links">
          <ul>
            <li className="create-review">
              <Link to="/addFavourite">
                <span className="link">Add Packages</span>
              </Link>
            </li>
            <li className="home">
              <Link to="/">
                <span className="link">Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
