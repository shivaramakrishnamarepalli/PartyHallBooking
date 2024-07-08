import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";

function SpecificAdminCard() {
  const navigate = useNavigate();
  const [bookedDate, setBookedDate] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [eventType, setEventType] = useState("");
  const [reviews, setReviews] = useState({ avg_rating: 0, reviews: [] });

  const [hall, setHall] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getHall() {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      try {
        const response = await axios.get(
          `http://localhost:3006/api/user/getHalls/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setHall(response.data);
      } catch (error) {
        alert("Error fetching hall details: " + error);
      }
    }

    async function getReviews() {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      try {
        const response = await axios.get(
          `http://localhost:3006/api/user/review/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReviews(response.data);
      } catch (error) {
        console.log("Error fetching hall details: ", error);
      }
    }

    getHall();
    getReviews();
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

  const bookHall = async (e) => {
    e.preventDefault();
    console.log(hall);
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    const today = new Date();
    const bd = new Date(bookedDate);

    if (bd.getDate() > today.getDate()) {
      console.log("The booked date is after today's date.");
    } else {
      console.log("bd: ", bookedDate, "today : ", today);
      alert("please choose a valid date!");
      return;
    }

    await axios
      .post(
        `http://localhost:3006/api/user/bookHall/${id}`,
        {
          user_id,
          booked_date: bookedDate,
          duration_hours: 24,
          paid_amoutnt_as_rent: 5000,
          number_of_guests: numGuests,
          event_type: eventType,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        alert("Booking Successful");
        navigate(`/user/bookings`);
      })
      .catch((err) => {
        alert("Hall is already booked");
        // console.log(alert("Booking failed"));
      });
  };

  async function HandleDeleteHall() {
    // if (!confirm("Do you want to confirm the delete?")) return;

    const token = localStorage.getItem("token");
    console.log(id);
    await axios
      .post(
        `http://localhost:3006/api/admin/deleteHall`,
        {
          hall_id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        navigate(`/admin/home`);
      })
      .catch((err) => console.log(err));
  }

  async function HandleEditHall() {
    console.log("edit");
  }

  return (
    <>
      <div className="container-fluid mt-5 p-5">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                id="displayImage"
                src="#"
                className="card-img img-fluid"
                alt={hall.hall_name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="col-md-8"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}
            >
              <div className="card-body">
                <h1
                  className="card-title display-4"
                  style={{ color: "#6c757d" }}
                >
                  {hall.hall_name}
                </h1>
                <p className="card-text lead">
                  <strong style={{ color: "#6c757d" }}>Address:</strong>{" "}
                  {hall.hall_address}
                </p>
                <p className="card-text lead">
                  <strong style={{ color: "#6c757d" }}>Admin ID:</strong>{" "}
                  {hall.admin_id}
                </p>
                <p className="card-text lead">
                  <strong style={{ color: "#6c757d" }}>Status:</strong>{" "}
                  {hall.status}
                </p>
                <p className="card-text lead">
                  <strong style={{ color: "#6c757d" }}>Rental Cost:</strong> $
                  {hall.hall_rental_cost}
                </p>
                <p className="card-text lead">
                  <strong style={{ color: "#6c757d" }}>Max Capacity:</strong>{" "}
                  {hall.hall_max_capacity}
                </p>
                <p className="card-text lead">
                  <strong style={{ color: "#6c757d" }}>Price per Plate:</strong>{" "}
                  ${hall.hall_price_per_plate}
                </p>
                <p className="card-text lead">
                  <strong style={{ color: "#6c757d" }}>Rating:</strong>{" "}
                  {hall.hall_rating}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btn btn-primary m-1" onClick={HandleEditHall}>
          Edit Hall
        </button> */}
        <button className="btn btn-danger m-1" onClick={HandleDeleteHall}>
          Delete Hall
        </button>
        <div className="container-fluid mb-3">
          <div className="card mt-4">
            <div className="card-body">
              <h3 className="card-title">Hall rating: {reviews.avg_rating}</h3>
              <h4 className="card-subtitle mb-3">Reviews</h4>
              {reviews.reviews.length === 0 && <p>No reviews</p>}
              {reviews.reviews.map((rev) => (
                <div key={rev.user_id} className="card review-item mb-3">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <span>@{rev.user_id}</span>
                    <div className="star-rating">{rev.rating}</div>
                  </div>
                  <div className="card-body">
                    <p className="card-text">Comment: {rev.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecificAdminCard;
