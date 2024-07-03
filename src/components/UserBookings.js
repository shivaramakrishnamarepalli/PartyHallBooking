import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchBookings() {
      let id = localStorage.getItem("user_id");
      let token = localStorage.getItem("token");

      if (!token) {
        alert("Please login again!");
        //new
        navigate("/role");
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
      <div className="container-wrapper">
        <div className="container card">
          <h1 className="text-center">Bookings ⬇️</h1>
          <hr></hr>
          {bookings.length === 0 && <div>No booking found!</div>}

          {bookings.length > 0 && (
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Booking ID</th>
                  <th>Hall Booked</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => {
                  const date = new Date(booking.booked_date);
                  const formattedDate = date.toLocaleDateString();
                  const today = new Date();
                  const isActive = date > today;

                  return (
                    <tr key={booking.booking_id}>
                      <td>{booking.booking_id}</td>
                      <td>{booking.hall_id}</td>
                      <td>{formattedDate}</td>
                      <td>{isActive ? "✔️ Active" : "❌ Expired"} </td>{" "}
                      {/* Display active symbol if the date is after today */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default UserBookings;
