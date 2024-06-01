import "bootstrap/dist/css/bootstrap.min.css";
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import spvLogo from '../spv.jpg'
import "../styles/index.css";
function Navbar1() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-body-secondary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src={spvLogo} alt="Bootstrap" width="60" height="40"/> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn custom-login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar1;
