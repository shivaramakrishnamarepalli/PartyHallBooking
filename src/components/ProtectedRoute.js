// ProtectedRoute.js
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (userRole !== "admin") {
      alert("You are restricted from using admin pages!");
      navigate("/login");
    }
  }, [navigate, userRole]);

  return userRole === "admin" ? <Element {...rest} /> : null;
};

export default ProtectedRoute;
