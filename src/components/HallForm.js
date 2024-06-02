import React, { useState } from "react";
import "../styles/editHall.css";
import axios from "axios";

const HallForm = () => {
  const [formData, setFormData] = useState({
    hall_id: "",
    hall_name: "",
    hall_address: "",
    admin_id: "",
    status: "",
    hall_rental_cost: "",
    hall_max_capacity: "",
    hall_price_plate: "",
    hall_duration: "",
    hall_rating: "",
    // hall_image: "",
  });

  const [errors, setErrors] = useState({
    hall_id: "",
    hall_name: "",
    hall_address: "",
    admin_id: "",
    status: "",
    hall_rental_cost: "",
    hall_max_capacity: "",
    hall_price_plate: "",
    hall_duration: "",
    hall_rating: "",
    // hall_image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let hasError = false;
    const newErrors = { ...errors };

    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === "") {
        newErrors[key] = "This field is required";
        console.log("This field is required", key);
        hasError = true;
      }
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission if all fields are filled
    const token = localStorage.getItem("token");
    console.log(formData, "63");
    await axios
      .post(
        "http://localhost:3006/api/admin/addHall",
        {
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "succ");
      })
      .catch((err) => {
        console.log(err, "err");
      });

    await uploadImage();
  };

  async function uploadImage() {
    console.log("hi");
    if (formData.hall_id == null)
      document.getElementById("uploadStatus").innerText =
        "Error viewing image. Try correcting the hall id";

    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];
    console.log(file, "file");

    if (!file) {
      document.getElementById("uploadStatus").innerText =
        "Please select an image file.";
      return;
    }

    const formData1 = new FormData();
    formData1.append("image", file);
    setFormData({ ...formData, hall_image: formData1 });
    console.log(formData1);

    try {
      const response = await fetch(
        `http://localhost:3006/api/user/uploadImageReq/${formData.hall_id}`,
        {
          method: "POST",
          body: formData1,
        }
      );

      if (response.ok) {
        console.log("uploaded image");
        document.getElementById("uploadStatus").innerText =
          "Image uploaded successfully!";
        // Update displayed image after successful upload
      } else {
        document.getElementById("uploadStatus").innerText =
          "Error uploading image.";
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      document.getElementById("uploadStatus").innerText =
        "Error uploading image.";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="p-2"
    >
      <div className="container p-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group p-1">
            <label htmlFor="hall_id">Hall ID</label>
            <input
              type="text"
              className="form-control"
              id="hall_id"
              name="hall_id"
              onChange={handleChange}
              value={formData.hall_id}
              style={{ width: "200px" }}
            />
            {errors.hall_id && (
              <small className="text-danger">{errors.hall_id}</small>
            )}
          </div>
          <div>
            <label htmlFor="hall_id">Upload your hall Image</label>
            <input type="file" id="imageInput" />
            <button type="button">Upload Image</button>
            <p id="uploadStatus"></p>
          </div>
          <div className="form-group p-1">
            <label htmlFor="hall_name">Hall Name</label>
            <input
              type="text"
              className="form-control"
              id="hall_name"
              name="hall_name"
              onChange={handleChange}
              value={formData.hall_name}
            />
            {errors.hall_name && (
              <small className="text-danger">{errors.hall_name}</small>
            )}
          </div>
          <div className="form-group p-1">
            <label htmlFor="hall_address">Hall Address</label>
            <input
              type="text"
              className="form-control"
              id="hall_address"
              name="hall_address"
              onChange={handleChange}
              value={formData.hall_address}
            />
            {errors.hall_address && (
              <small className="text-danger">{errors.hall_address}</small>
            )}
          </div>
          <div className="form-group p-1">
            <label htmlFor="admin_id">Admin ID</label>
            <input
              type="text"
              className="form-control"
              id="admin_id"
              name="admin_id"
              onChange={handleChange}
              value={formData.admin_id}
            />
            {errors.admin_id && (
              <small className="text-danger">{errors.admin_id}</small>
            )}
          </div>

          <div className="form-group p-1">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              className="form-control"
              id="status"
              name="status"
              onChange={handleChange}
              value={formData.status}
            />
            {errors.status && (
              <small className="text-danger">{errors.status}</small>
            )}
          </div>

          <div className="form-group p-1">
            <label htmlFor="hall_rental_cost">Rental Cost</label>
            <input
              type="text"
              className="form-control"
              id="hall_rental_cost"
              name="hall_rental_cost"
              onChange={handleChange}
              value={formData.hall_rental_cost}
            />
            {errors.hall_rental_cost && (
              <small className="text-danger">{errors.hall_rental_cost}</small>
            )}
          </div>

          <div className="form-group p-1">
            <label htmlFor="hall_max_capacity">Max Capacity</label>
            <input
              type="text"
              className="form-control"
              id="hall_max_capacity"
              name="hall_max_capacity"
              onChange={handleChange}
              value={formData.hall_max_capacity}
            />
            {errors.hall_max_capacity && (
              <small className="text-danger">{errors.hall_max_capacity}</small>
            )}
          </div>

          <div className="form-group p-1">
            <label htmlFor="hall_price_plate">Price per Plate</label>
            <input
              type="text"
              className="form-control"
              id="hall_price_plate"
              name="hall_price_plate"
              onChange={handleChange}
              value={formData.hall_price_plate}
            />
            {errors.hall_price_plate && (
              <small className="text-danger">{errors.hall_price_plate}</small>
            )}
          </div>

          <div className="form-group p-1">
            <label htmlFor="hall_duration">Duration</label>
            <input
              type="text"
              className="form-control"
              id="hall_duration"
              name="hall_duration"
              onChange={handleChange}
              value={formData.hall_duration}
            />
            {errors.hall_duration && (
              <small className="text-danger">{errors.hall_duration}</small>
            )}
          </div>

          <div className="form-group p-1">
            <label htmlFor="hall_rating">Rating</label>
            <input
              type="text"
              className="form-control"
              id="hall_rating"
              name="hall_rating"
              onChange={handleChange}
              value={formData.hall_rating}
            />
            {errors.hall_rating && (
              <small className="text-danger">{errors.hall_rating}</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary m-1">
            Add Hall
          </button>
        </form>
      </div>
    </div>
  );
};

export default HallForm;
