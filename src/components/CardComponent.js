import img_path from "../images/logo192.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import rating1 from "../images/rating1.png";
import addressIcon from "../images/address-icon.png";
import { FaRupeeSign } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { IoPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function Card({ imageUrl, id, name, address, rental_cost, rating, capacity }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/hall/${id}`);
  };

  return (
    <>
      {}
      <div
        className="card p-3 m-5 border-0 card-hover "
        style={{ width: "25rem" }}
      >
        <img
          onClick={handleClick}
          src={img_path}
          className="card-img-top img-fluid"
          alt="..."
          width={"10px"}
        />
        <div className="card-body">
          <p className="card-text">
            <div className="d-flex justify-content-between">
              <span>
                <h5>
                  <FaBuilding />
                  {name}
                </h5>
              </span>
              <span>
                {" "}
                <h5>
                  <img src={rating1} width={"22rem"} />
                  <span> {rating + ".0"}</span>
                </h5>
              </span>
            </div>
            <div>
              <span>
                <img src={addressIcon} width={"22rem"} />
                {address}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span>
                {" "}
                <FaRupeeSign />
                {rental_cost}
              </span>
              <span>
                {/* <IoPerson /> */}
                {capacity}
              </span>
            </div>
          </p>
        </div>
      </div>
      {/* <div className="card p-3 m-3" style={{ width: '22rem' }}>
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">1{location}</p>
          <p className="card-text">1{rentalCost}</p>
          <p className="card-text">2{maxCapacity}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Book Now</button>
        </div> 
      </div>*/}
    </>
  );
}
export default Card;
