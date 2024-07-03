import "bootstrap/dist/css/bootstrap.min.css";
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import spvLogo from '../spv.jpg'
import "../styles/index.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar1() {
  const navigate = useNavigate();
  function handleRole() {
    navigate("/");
  }
  function handleProfile() {
    navigate("/profile/");
  }
  function handleSignOut() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    //new
    navigate("/role");
    // or navigate to the login page
  }
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={
                    localStorage.getItem("userRole")
                      ? `/${localStorage.getItem("userRole")}/home`
                      : `/role`
                  }
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <button
                className="btn custom-login-btn"
                type="submit"
                onClick={() => handleRole()}
              >
                Login
              </button>
              <button
                className="btn custom-login-btn"
                onClick={() => handleProfile()}
              >
                UserProfile
              </button> */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto m-2">
                  <li className="nav-item">
                    {localStorage.getItem("user_id") && (
                      <button
                        className="btn btn-danger"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </button>
                    )}
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  {!localStorage.getItem("user_id") && (
                    <li className="nav-item">
                      {/* <Link className="nav-link" to="/login">
                        Login
                      </Link> */}
                      <button
                        className="btn custom-login-btn"
                        type="submit"
                        onClick={() => handleRole()}
                      >
                        Login
                      </button>
                    </li>
                  )}
                  {localStorage.getItem("user_id") && (
                    <li className="nav-item">
                      <button
                        className="btn custom-login-btn"
                        onClick={() => handleProfile()}
                      >
                        UserProfile
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar1;
