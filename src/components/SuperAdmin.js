import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import axios from "axios";

function SuperAdmin() {
  const [pendingRequests, setPendingRequests] = useState([]);

  function AcceptReq() {}
  function RejectReq() {}

  useEffect(() => {
    async function fetchHalls() {
      try {
        const response = await axios.get(
          "http://localhost:3006/api/super/requests"
        );
        setPendingRequests(response.data);
      } catch (error) {
        console.error("Error fetching halls:", error);
      }
    }

    fetchHalls();
  }, []);

  return (
    <div className="container mt-4 sa">
      <h1 className="mb-4">SuperAdmin</h1>
      <div className="row">
        {pendingRequests.map((hall) => (
          <div key={hall.hall_id} className="col-md-4 mb-4">
            <CardComponent
              name={hall.hall_name}
              address={hall.hall_address}
              admin={hall.admin_id}
              rental_cost={hall.hall_rental_cost}
              rating={hall.hall_rating}
              capacity={hall.hall_max_capacity}
              id={hall.hall_id}
              imageData={hall.hall_image}
            />
            <div className="d-flex justify-content-between mt-2">
              <button className="btn btn-success" onClick={AcceptReq}>
                ✔️ Accept
              </button>
              <button className="btn btn-danger" onClick={RejectReq}>
                ❌ Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuperAdmin;
