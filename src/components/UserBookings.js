import { useEffect, useState } from "react";
import axios from "axios";

function UserBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      let id = localStorage.getItem("user_id");
      let token = localStorage.getItem("token");

      if (!token) {
        alert("Please login again!");
      }
      if (!id) {
        while (id) {
          id = prompt(
            "Oops! seems like we lost your id. Please Enter your user id!"
          );
        }
      }

      try {
        const response = await axios.post(
          `http://localhost:3006/api/user/bookings`,
          {
            method: "POST",
            id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("resp ", response);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching halls:", error);
      }
    }

    fetchBookings();
  }, []);
  console.log(bookings);

  return (
    <>
      <div id="ErrorDisplay"></div>
      <h1>Your bookings : </h1>
      {bookings.length === 0 && <div>No booking found!</div>}

      {bookings.map((booking) => (
        //print all the booking details in the form of cards (long and horizontal)
        <div key={booking.booking_id}>
          <div>Booking id : {booking.booking_id}</div>
          <div>Hall booked : {booking.hall_id}</div>
          <div>date : {booking.booked_date}</div>
          <br></br>
        </div>
      ))}
    </>
  );
}

export default UserBookings;
