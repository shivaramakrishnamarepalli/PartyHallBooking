import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import axios from "axios";
import "../styles/cardDisplay.css";
import Navbar1 from "./Navbar";
import { useNavigate } from "react-router-dom";
import CardsDisplay from "./CardsDisplay";
import Center from "./Center";

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
      {/* <CardComponent /> */}
      <div className="container-wrapper">
        <div className="container card">
          <div className="d-flex justify-content-around bg-body-secondary m-3 p-3 text-center">
            <h3 className="m-3">Halls </h3>
            <button
              onClick={handleAddHall}
              className="btn btn-success mb-3 m-3"
            >
              Add hall
            </button>
          </div>

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
        </div>
      </div>
    </>
  );
}

export default AdminHome;
