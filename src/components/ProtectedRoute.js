// ProtectedRoute.js
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (userRole !== "admin") {
      alert("You are restricted from using admin pages!");
      navigate("/role");
    }
  }, [navigate, userRole]);

  return userRole === "admin" ? children : <div>Access denied</div>;
};

export default ProtectedRoute;
