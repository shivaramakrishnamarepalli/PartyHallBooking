import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/editHall.css";
import axios from "axios";

const HallForm = () => {
  const navigate = useNavigate();
  const handleSuccess = () => {
    navigate(`/admin/home`);
  };

  const [loading, setLoading] = useState(false);
  const [hall_image_value, setHIV] = useState("");
  function handleImageUpload(e) {
    try {
      console.log(e.target.files);
      setHIV(URL.createObjectURL(e.target.files[0]));
    } catch (err) {
      console.log(err);
    }
  }

  const [formData, setFormData] = useState({
    hall_id: "",
    hall_name: "",
    hall_address: "",
    admin_id: `${localStorage.getItem('user_id')}`,
    status: "",
    hall_rental_cost: "",
    hall_max_capacity: "",
    hall_price_plate: "",
    hall_duration: "24",
    hall_rating: "0",
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
    hall_duration: "24",
    hall_rating: "0",
    // hall_image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };
  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleSubmit1(e);
    setLoading(false);
  };

  const handleSubmit1 = async (e) => {
    if (hall_image_value === "") {
      alert("Please Upload Hall Image!");
      return;
    }

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
      .then(async (res) => {
        console.log(res, "succ");
        await uploadImage();
        alert("Your request has been sent successfully! Thank You!");
        handleSuccess();
      })
      .catch((err) => {
        alert("Something failed!Please check your details!");
        console.log(err, "err");
        return;
      });
  };

  async function uploadImage() {
    console.log("hi");
    if (formData.hall_id == null)
      document.getElementById("uploadStatus").innerText =
        "Error viewing image. Try correcting the hall id";

    const fileInput = document.getElementById("hall_image");
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
    <div>
      <div className="container-wrapper">
        <div className="container card p-3">
          <div className="row background-img">
            <div className="col-md-3 p-4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  padding: "1rem",
                  color: "#ffffff",
                  fontSize: "1.1rem",
                }}
              >
                <div>
                  <label htmlFor="hall_image">Hall Image</label>
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      display: "flex",
                      justifyContent: "center",
                      color: "black",
                      fontSize: "1.1rem",
                      alignItems: "center",
                      marginBottom: "1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  >
                    {!hall_image_value && <span>No Image</span>}
                    {hall_image_value && (
                      <img
                        style={{ width: "280px", height: "300px" }}
                        src={hall_image_value}
                        alt="Uploaded"
                      />
                    )}
                  </div>
                  <input
                    type="file"
                    id="hall_image"
                    className="form-control"
                    onChange={handleImageUpload}
                  />
                  {/* <button
                  onClick={setImage}
                  className="btn btn-secondary p-2 mt-3"
                  style={{
                    backgroundColor: "white",
                    color: "brown",
                    width: "100%",
                  }}
                >
                  Upload Image
                </button> */}
                  <p id="uploadStatus"></p>
                </div>
              </div>
            </div>
            <div className="col-md-9 p-2">
              <div
                className="container p-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  color: "#ffffff",
                  fontSize: "1.1rem",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6 p-1">
                      <label htmlFor="hall_id">Hall ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="hall_id"
                        name="hall_id"
                        onChange={handleChange}
                        value={formData.hall_id}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                      />
                      {errors.hall_id && (
                        <small className="text-danger">{errors.hall_id}</small>
                      )}
                    </div>
                    <div className="form-group col-md-6 p-1">
                      <label htmlFor="admin_id">Admin ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="admin_id"
                        name="admin_id"
                        onChange={handleChange}
                        readOnly
                        value={localStorage.getItem("user_id")}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                      />
                      {errors.admin_id && (
                        <small className="text-danger">{errors.admin_id}</small>
                      )}
                    </div>
                    <div className="form-group col-md-12 p-1">
                      <label htmlFor="hall_name">Hall Name</label>
                      <textarea
                        className="form-control"
                        id="hall_name"
                        name="hall_name"
                        onChange={handleChange}
                        value={formData.hall_name}
                        rows={2}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                      />
                      {errors.hall_name && (
                        <small className="text-danger">
                          {errors.hall_name}
                        </small>
                      )}
                    </div>
                    <div className="form-group col-md-12 p-1">
                      <label htmlFor="hall_address">Hall Address</label>
                      <textarea
                        className="form-control"
                        id="hall_address"
                        name="hall_address"
                        onChange={handleChange}
                        value={formData.hall_address}
                        rows={3}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                      />
                      {errors.hall_address && (
                        <small className="text-danger">
                          {errors.hall_address}
                        </small>
                      )}
                    </div>

                    <div className="form-group col-md-6 p-1">
                      <label htmlFor="status">Status</label>
                      {/* <input
                        type="text"
                        className="form-control"
                        id="status"
                        name="status"
                        onChange={handleChange}
                        value={formData.status}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                      /> */}
                      <br></br>
                      <select
          className="form-control"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange1}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <option value="available">available</option>
          <option value="not available">not available</option>
        </select>
                      {errors.status && (
                        <small className="text-danger">{errors.status}</small>
                      )}
                    </div>
                    <div className="form-group col-md-6 p-1">
                      <label htmlFor="hall_rental_cost">Rental Cost</label>
                      <input
                        type="text"
                        className="form-control"
                        id="hall_rental_cost"
                        name="hall_rental_cost"
                        onChange={handleChange}
                        value={formData.hall_rental_cost}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                      />
                      {errors.hall_rental_cost && (
                        <small className="text-danger">
                          {errors.hall_rental_cost}
                        </small>
                      )}
                    </div>
                    <div className="form-group col-md-6 p-1">
                      <label htmlFor="hall_max_capacity">Max Capacity</label>
                      <input
                        type="text"
                        className="form-control"
                        id="hall_max_capacity"
                        name="hall_max_capacity"
                        onChange={handleChange}
                        value={formData.hall_max_capacity}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                      />
                      {errors.hall_max_capacity && (
                        <small className="text-danger">
                          {errors.hall_max_capacity}
                        </small>
                      )}
                    </div>
                    <div className="form-group col-md-6 p-1">
                      <label htmlFor="hall_price_plate">Price per Plate</label>
                      <input
                        type="text"
                        className="form-control"
                        id="hall_price_plate"
                        name="hall_price_plate"
                        onChange={handleChange}
                        value={formData.hall_price_plate}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                      />
                      {errors.hall_price_plate && (
                        <small className="text-danger">
                          {errors.hall_price_plate}
                        </small>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-secondary p-2 mt-3"
                    style={{
                      backgroundColor: "white",
                      color: "brown",
                      width: "100%",
                    }}
                  >
                    Add Hall
                  </button>
                </form>
                {loading && <div>Uploading your hall request... </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallForm;
