import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function ViewProfile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  function handleEdit() {
    // const role = localStorage.getItem('userRole')
    // const id = localStorage.getItem('user_id')
    // navigate(`/${role}/editProfile/${id}`)

    setEditMode(!editMode);
  }

  //   useEffect(() => {
  //     async function fetchUser() {
  //       try {
  //         const id = localStorage.getItem('user_id')
  //         if (!id) {
  //           throw new Error('User ID not found in localStorage')
  //         }
  //         console.log(id)

  //         // const response = await fetch(
  //         //   `http://localhost:3006/api/admin/profile/${id}`
  //         // )
  //         const response = await fetch(
  //           `http://localhost:3006/api/user/image/${id}`
  //         )
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`)
  //         }

  //         const userData = await response.json()
  //         setUser(userData)
  //       } catch (error) {
  //         console.error('Error fetching user:', error.message)
  //       }
  //     }
  //     fetchUser()
  //   }, [])

  const { id } = useParams(); // Get user ID from URL params
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    id: "",
  });
  useEffect(() => {
    async function fetchHalls() {
      try {
        const id = localStorage.getItem("user_id");
        if (!id) {
          throw new Error("User ID not found in localStorage");
        }
        console.log(id);
        const token = localStorage.getItem("token");

        await axios
          .get(`http://localhost:3006/api/admin/profile/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setUser(res.data);
            setFormData({
              name: res.data.admin_name,
              email: res.data.admin_email,
              mobileNumber: res.data.admin_mobile_no,
              id: res.data.admin_id,
            });
            console.log(res.data);
          });
      } catch (error) {
        console.error("Error fetching halls:", error);
      }
    }

    fetchHalls();
  }, []);

  //   useEffect(() => {
  //     async function fetchUserProfile() {
  //       try {
  //         const response = await fetch(
  //           `http://localhost:3006/api/admin/profile/${id}`
  //         )
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`)
  //         }
  //         const userData = await response.json()
  //         setFormData(userData)
  //       } catch (error) {
  //         console.error('Error fetching user profile:', error.message)
  //       }
  //     }
  //     fetchUserProfile()
  //   }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const id = localStorage.getItem("user_id");
      if (!id) {
        throw new Error("User ID not found in localStorage");
      }
      console.log(id);
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3006/api/admin/editProfile/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      if (response.ok) {
        alert("Profile updated successfully!");
        window.location.reload(true);
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <>
      {!editMode && (
        <div className="container mt-4">
          <h1 className="mb-4">Profile Page</h1>
          {user && (
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">ID</th>
                  <td>{user.admin_id}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{user.admin_name}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{user.admin_email}</td>
                </tr>
                <tr>
                  <th scope="row">Mobile Number</th>
                  <td>{user.admin_mobile_no}</td>
                </tr>
              </tbody>
            </table>
          )}
          <button onClick={() => handleEdit()} className="btn btn-primary">
            Edit
          </button>
        </div>
      )}

      {editMode && (
        <div className="container mt-4">
          <h1 className="mb-4">Edit Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                value={user.admin_id}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
          <button onClick={() => handleEdit()} className="btn btn-primary">
            Cancel
          </button>
        </div>
      )}
    </>
  );
}
