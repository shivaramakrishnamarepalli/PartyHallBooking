import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import axios from "axios";
import "../styles/cardDisplay.css"

function CardsDisplay() {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    async function fetchHalls() {
      try {
        const response = await axios.get(
          "http://localhost:3006/api/user/getHalls"
        );
        setHalls(response.data);
      } catch (error) {
        console.error("Error fetching halls:", error);
      }
    }

    fetchHalls();
  }, []);

  return (
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
      ))}{halls.map((hall) => (
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
      ))}{halls.map((hall) => (
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
      ))}{halls.map((hall) => (
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
      ))}{halls.map((hall) => (
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
      ))}{halls.map((hall) => (
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
  );
}

export default CardsDisplay;