import img_path from '../images/logo192.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'

function Card({ imageUrl, name, location, rentalCost, maxCapacity }) {
  return (
    <>
      <div
        className="card p-3 m-5 border-0 card-hover"
        style={{ width: '22rem' }}
      >
        <img src={img_path} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <div className="d-flex justify-content-between">
              <span>Hall Name</span>
              <span>Rating</span>
            </div>
            <div>
              <span>Hall location </span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Hall rentalCost</span>
              <span>Hall rentalCost</span>
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
  )
}
export default Card
