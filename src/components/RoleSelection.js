// RoleSelection.js
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    localStorage.setItem("userRole", role);
    navigate("/login");
  };

  return (
    <div>
      <h1>Select Your Role</h1>
      <button onClick={() => handleRoleSelection("admin")}>Admin</button>
      <button onClick={() => handleRoleSelection("user")}>User</button>
    </div>
  );
}

export default RoleSelection;
