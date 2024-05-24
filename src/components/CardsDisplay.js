import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import axios from "axios";

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

  async function displayImage(hall_id) {
    try {
      if (hall_id == null)
        document.getElementById("uploadStatus").innerText =
          "Error viewing image. Try correcting the hall id";
      const response = await fetch(
        `http://localhost:3006/api/user/image/${hall_id}`
      );
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return url;
      } else {
        console.error("Failed to fetch image:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  return (
    <>
      <h1>cards display</h1>
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
          image={displayImage(hall.hall_id)}
        />
      ))}
    </>
  );
}

export default CardsDisplay;
