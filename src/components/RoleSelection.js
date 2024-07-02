// RoleSelection.js
import { useNavigate } from "react-router-dom";
import "../styles/roleStyle.css";
import Navbar1 from "./Navbar";

function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    localStorage.setItem("userRole", role);
    navigate("/login");
  };

  return (
    <div className="">
      <Navbar1></Navbar1>
      <div className="container-wrapper ">
        <div className="container card">
          <div className="role-container container-fluid">
            <div className="container-role rounded ">
              <div className="card-body justify-content-center row ">
                <h5 className="card-title text-center m-3 text-light">
                  Select Your Role
                </h5>
                <div className="buttons-class col-auto">
                  <button
                    onClick={() => handleRoleSelection("admin")}
                    className="btn m-2 btn-color p-3 fs-5 text-light"
                  >
                    Admin
                  </button>
                  <button
                    onClick={() => handleRoleSelection("user")}
                    className="btn m-1 btn-color p-3 fs-5 text-light"
                  >
                    User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
