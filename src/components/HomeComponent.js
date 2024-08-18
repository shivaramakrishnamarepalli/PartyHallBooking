import Navbar from "./Navbar";
import Center from "./Center";
import Navbar1 from "./Navbar";
import { useNavigate } from "react-router-dom";

function HomeComponent() {
  const navigate = useNavigate();
  function handleBooking() {
    navigate("/user/bookings");
  }
  return (
    <>
      <Navbar1 />
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success p-2 mt-5 text-center fs-4"
          onClick={handleBooking}
        >
          My bookings
        </button>
      </div>
      <Center />
    </>
  );
}
export default HomeComponent;
