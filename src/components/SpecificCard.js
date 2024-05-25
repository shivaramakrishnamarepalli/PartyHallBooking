import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SpecificCard() {
  const [bookedDate, setBookedDate] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [eventType, setEventType] = useState('');

  const [hall, setHall] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getHall() {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      try {
        const response = await axios.get(`http://localhost:3006/api/user/getHalls/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setHall(response.data);
      } catch (error) {
        alert("Error fetching hall details: " + error);
      }
    }

    getHall();
  }, [id]);

  if (!hall) {
    return <div>Loading...</div>;
  }

  async function displayImage() {
    try {
      const hall_id = id;
      if (hall_id == null)
        document.getElementById("uploadStatus").innerText =
          "Error viewing image. Try correcting the hall id";
      const response = await fetch(
        `http://localhost:3006/api/user/image/${hall_id}`
      );
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        document.getElementById("displayImage").src = url;
      } else {
        console.error("Failed to fetch image:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }
  displayImage();

  const bookHall = async (e)=>{
    e.preventDefault()
    console.log(hall)
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    await axios.post(`http://localhost:3006/api/user/bookHall/${id}`, {
  user_id,
  booked_date: bookedDate,
  duration_hours: 24,
  paid_amoutnt_as_rent: 5000,
  number_of_guests: numGuests,
  event_type: eventType,
}, {
  headers: {
    Authorization: `Bearer ${token}`
  }
}).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});

  }

  return (
    
    <div className="container-fluid mt-5 p-5">
  <div className="card">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img
          id="displayImage"
          src="#"
          className="card-img img-fluid"
          alt={hall.hall_name}
          style={{width: "100%", height: "100%"}}
        />
      </div>
      <div className="col-md-8" style={{backgroundColor: "#f8f9fa", borderRadius: "15px"}}>
  <div className="card-body">
    <h1 className="card-title display-4" style={{color: "#6c757d"}}>{hall.hall_name}</h1>
    <p className="card-text lead"><strong style={{color: "#6c757d"}}>Address:</strong> {hall.hall_address}</p>
    <p className="card-text lead"><strong style={{color: "#6c757d"}}>Admin ID:</strong> {hall.admin_id}</p>
    <p className="card-text lead"><strong style={{color: "#6c757d"}}>Status:</strong> {hall.status}</p>
    <p className="card-text lead"><strong style={{color: "#6c757d"}}>Rental Cost:</strong> ${hall.hall_rental_cost}</p>
    <p className="card-text lead"><strong style={{color: "#6c757d"}}>Max Capacity:</strong> {hall.hall_max_capacity}</p>
    <p className="card-text lead"><strong style={{color: "#6c757d"}}>Price per Plate:</strong> ${hall.hall_price_per_plate}</p>
    <p className="card-text lead"><strong style={{color: "#6c757d"}}>Rating:</strong> {hall.hall_rating}</p>
  </div>
</div>

    </div>
  </div>
  <div id="book-now">
    <h1>booknow</h1>
    <form onSubmit={(e)=>bookHall(e)}>
      <label>
        Booked Date:
        <input type="date" value={bookedDate} onChange={e => setBookedDate(e.target.value)} required />
      </label>
      <label>
        Number of Guests:
        <input type="number" value={numGuests} onChange={e => setNumGuests(e.target.value)} required />
      </label>
      <label>
        Event Type:
        <input type="text" value={eventType} onChange={e => setEventType(e.target.value)} required />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
  <div id="Reviews"></div>
</div>

  );
}

export default SpecificCard;