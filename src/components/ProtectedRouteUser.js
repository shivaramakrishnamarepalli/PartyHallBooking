// ProtectedRoute.js
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRouteUser = ({ children }) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (userRole !== "user") {
      // alert("Please login as User !");
      navigate("/role");
    }
  }, [navigate, userRole]);

  return userRole === "user" ? children : <div>Access denied</div>;
};

export default ProtectedRouteUser;
