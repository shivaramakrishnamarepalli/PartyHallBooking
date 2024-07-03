import img_path from "../images/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import rating1 from "../images/rating1.png";
import addressIcon from "../images/address-icon.png";
import { FaRupeeSign, FaBuilding } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Card({ id, name, address, rental_cost, rating, capacity }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/user/hall/${id}`);
  };

  useEffect(() => {
    async function displayImage() {
      try {
        const hall_id = id;
        const response = await fetch(
          `http://localhost:3006/api/user/image/${hall_id}`
        );
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          document.getElementById(`displayImage-${id}`).src = url;
        } else {
        }
      } catch (error) {}
    }
    displayImage();
  }, [id]);

  return (
    <div
      className="card p-3 m-5 border-0 card-hover"
      style={{ width: "25rem" }}
    >
      <img
        id={`displayImage-${id}`}
        onClick={handleClick}
        src="#"
        className="card-img-top img-fluid"
        alt={name}
        width={"10px"}
      />
      <div className="card-body">
        <p className="card-text">
          <div className="d-flex justify-content-between">
            <span>
              <h5>
                <FaBuilding /> {name}
              </h5>
            </span>
            <span>
              <h5>
                <img src={rating1} width={"22rem"} alt="rating" />
                {/* <span> {rating}</span> */}
              </h5>
            </span>
          </div>
          <div>
            <span>
              <img src={addressIcon} width={"22rem"} alt="address icon" />
              {address}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <span>
              <FaRupeeSign /> {rental_cost}
            </span>
            <span>
              <IoPerson /> {capacity}
            </span>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Card;
