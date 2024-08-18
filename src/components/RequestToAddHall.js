import React, { useState } from "react";
import Navbar1 from "./Navbar";

const RequestToAddHall = () => {
  const [formData, setFormData] = useState({
    hall_id: "",
    hall_name: "",
    hall_address: "",
    admin_id: "",
    status: "",
    hall_rental_cost: "",
    hall_max_capacity: "",
    hall_price_plate: "",
    hall_catering: "",
    hall_duration: "",
    hall_rating: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === "") {
        alert("Please fill out all fields");
        return;
      }
    }
    // Handle form submission if all fields are filled
    console.log(formData);
  };

  return (
    <>
      <Navbar1 />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hall_id">Hall ID</label>
          <input
            type="text"
            className="form-control"
            id="hall_id"
            name="hall_id"
            onChange={handleChange}
            value={formData.hall_id}
          />
        </div>
        {/* Add other form groups for each field */}
        <div className="form-group">
          <label htmlFor="hall_name">Hall Name</label>
          <input
            type="text"
            className="form-control"
            id="hall_name"
            name="hall_name"
            onChange={handleChange}
            value={formData.hall_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hall_address">Hall Address</label>
          <input
            type="text"
            className="form-control"
            id="hall_address"
            name="hall_address"
            onChange={handleChange}
            value={formData.hall_address}
          />
        </div>
        <div className="form-group">
          <label htmlFor="admin_id">Admin ID</label>
          <input
            type="text"
            className="form-control"
            id="admin_id"
            name="admin_id"
            onChange={handleChange}
            value={formData.admin_id}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            onChange={handleChange}
            value={formData.status}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hall_rental_cost">Hall Rental Cost</label>
          <input
            type="text"
            className="form-control"
            id="hall_rental_cost"
            name="hall_rental_cost"
            onChange={handleChange}
            value={formData.hall_rental_cost}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hall_max_capacity">Hall Max Capacity</label>
          <input
            type="text"
            className="form-control"
            id="hall_max_capacity"
            name="hall_max_capacity"
            onChange={handleChange}
            value={formData.hall_max_capacity}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hall_price_plate">Hall Price Per Plate</label>
          <input
            type="text"
            className="form-control"
            id="hall_price_plate"
            name="hall_price_plate"
            onChange={handleChange}
            value={formData.hall_price_plate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hall_catering">Hall Catering</label>
          <input
            type="text"
            className="form-control"
            id="hall_catering"
            name="hall_catering"
            onChange={handleChange}
            value={formData.hall_catering}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hall_duration">Hall Duration</label>
          <input
            type="text"
            className="form-control"
            id="hall_duration"
            name="hall_duration"
            onChange={handleChange}
            value={formData.hall_duration}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hall_rating">Hall Rating</label>
          <input
            type="text"
            className="form-control"
            id="hall_rating"
            name="hall_rating"
            onChange={handleChange}
            value={formData.hall_rating}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default RequestToAddHall;
