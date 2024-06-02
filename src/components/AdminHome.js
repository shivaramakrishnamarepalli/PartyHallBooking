import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import axios from "axios";
import "../styles/cardDisplay.css";
import Navbar1 from "./Navbar";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();
  const [halls, setHalls] = useState([]);
  function handleMove() {
    navigate("/login");
    return;
  }
  function handleAddHall() {
    navigate("/admin/addHall");
    return;
  }

  useEffect(() => {
    async function fetchHalls() {
      let admin_id = localStorage.getItem("user_id");
      if (!admin_id) {
        handleMove();
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:3006/api/admin/halls/${admin_id}`
        );
        setHalls(response.data);
      } catch (error) {
        console.error("Error fetching halls:", error);
      }
    }

    fetchHalls();
  }, []);

  return (
    <>
      <Navbar1></Navbar1>
      <h1>Your halls are : </h1>
      <div className="card-container">
        {halls.map((hall) => (
          <CardComponent
            key={hall.hall_id}
            name={hall.hall_name}
            address={hall.hall_address}
            admin={hall.admin_id}
            rental_cost={hall.hall_rental_cost}
            rating={hall.hall_rating}
            capacity={hall.hall_max_capacity}
            id={hall.hall_id}
            imageData={hall.hall_image}
          />
        ))}
      </div>
      <button onClick={handleAddHall}>Add hall</button>
    </>
  );
}

export default AdminHome;
