import React from "react";

const HallCard = ({ hall, AcceptReq, RejectReq }) => {
  return (
    <div className="hall-card">
      {/* <img
        src={`data:${hall.hall_image.contentType};base64,${hall.hall_image.data}`}
        alt={hall.hall_name}
      /> */}
      <div className="hall-details">
        <h2>{hall.hall_name}</h2>
        <p>
          <strong>Admin ID:</strong> {hall.admin_id}
        </p>
        <p>
          <strong>Hall ID:</strong> {hall.hall_id}
        </p>
        <p>
          <strong>Rental Cost:</strong> {hall.hall_rental_cost}
        </p>
        <p>
          <strong>Address:</strong> {hall.hall_address}
        </p>
        {/* <p>
          <strong>Rating:</strong> {hall.hall_rating}
        </p> */}
        <p>
          <strong>Max Capacity:</strong> {hall.hall_max_capacity}
        </p>
        {/* <p>
          <strong>Duration:</strong> {hall.hall_duration} hours
        </p> */}
        <p>
          <strong>Status:</strong> {hall.status}
        </p>
        <div className="d-flex justify-content-between mt-2">
          <button className="btn btn-success p-3 fs-6" onClick={AcceptReq}>
            ✔️ Accept
          </button>
          <button className="btn btn-danger p-3 fs-6" onClick={RejectReq}>
            ❌ Reject
          </button>
        </div>
      </div>
    </div>
  );
};

const HallList = ({ pendingRequests, AcceptReq, RejectReq }) => {
  return (
    <div className="hall-list">
      {pendingRequests.map((hall) => (
        <HallCard
          key={hall.hall_id}
          hall={hall}
          AcceptReq={() => AcceptReq(hall.hall_id)}
          RejectReq={() => RejectReq(hall.hall_id)}
        />
      ))}
    </div>
  );
};

export default HallList;
