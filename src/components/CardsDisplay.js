import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import axios from "axios";
import "../styles/cardDisplay.css";

function CardsDisplay() {
  const [halls, setHalls] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredHalls = halls.filter((hall) =>
    hall.hall_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a hall"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input p-1 rounded m-2 "
      />
      <div className="card-container ">
        {filteredHalls.map((hall) => {
          if(hall.status === "not available" ) return <></>
        
           return <CardComponent
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
})}
      </div>
    </div>
  );
}

export default CardsDisplay;
