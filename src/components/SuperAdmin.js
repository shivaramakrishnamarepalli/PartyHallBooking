import { useEffect, useState } from "react";
import HallCard from "./HallList";
import axios from "axios";
import HallList from "./HallList";

function SuperAdmin() {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [showReq, setShowReq] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchHalls() {
      try {
        const response = await axios.get(
          "http://localhost:3006/api/super/requests"
        );
        setPendingRequests(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching halls:", error);
      }
    }

    fetchHalls();
  }, []);

  async function AcceptReq(hall_id) {
    try {
      const response = await axios.post(
        "http://localhost:3006/api/super/halls",
        {
          hall_id: hall_id,
        }
      );
      window.location.reload(true);
    } catch (error) {
      console.error("Error fetching halls:", error);
    }
  }
  async function RejectReq(hall_id) {
    try {
      const response = await axios.post(
        "http://localhost:3006/api/super/halls/rej",
        {
          hall_id: hall_id,
        }
      );
      window.location.reload(true);
    } catch (error) {
      console.error("Error fetching halls:", error);
    }
    console.log(hall_id);
  }

  return (
    <>
      <div className="container-wrapper">
        <div className="container-card p-5">
          <h1 className="mb-4 text-center">SuperAdmin</h1>
          {loading && pendingRequests.length === 0 && (
            <>Requests are loading...</>
          )}
          {!loading && pendingRequests.length === 0 && (
            <>No Requests Available</>
          )}
          {pendingRequests.length !== 0 && (
            <>
              <button
                onClick={() => {
                  setShowReq(!showReq);
                }}
                className="btn btn-info fs-5 m-2"
              >
                Pending Requests
              </button>
              {showReq && (
                <HallList
                  pendingRequests={pendingRequests}
                  AcceptReq={AcceptReq}
                  RejectReq={RejectReq}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SuperAdmin;
