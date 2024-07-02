// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

// import axios from "axios";

// export default function ViewProfile() {
//   const [user, setUser] = useState(null);
//   const [editMode, setEditMode] = useState(false);

//   const navigate = useNavigate();

//   function handleEdit() {
//     // const role = localStorage.getItem('userRole')
//     // const id = localStorage.getItem('user_id')
//     // navigate(/${role}/editProfile/${id})

//     setEditMode(!editMode);
//   }

//   //   useEffect(() => {
//   //     async function fetchUser() {
//   //       try {
//   //         const id = localStorage.getItem('user_id')
//   //         if (!id) {
//   //           throw new Error('User ID not found in localStorage')
//   //         }
//   //         console.log(id)

//   //         // const response = await fetch(
//   //         //   http://localhost:3006/api/admin/profile/${id}
//   //         // )
//   //         const response = await fetch(
//   //           http://localhost:3006/api/user/image/${id}
//   //         )
//   //         if (!response.ok) {
//   //           throw new Error(HTTP error! Status: ${response.status})
//   //         }

//   //         const userData = await response.json()
//   //         setUser(userData)
//   //       } catch (error) {
//   //         console.error('Error fetching user:', error.message)
//   //       }
//   //     }
//   //     fetchUser()
//   //   }, [])

//   const { id } = useParams(); // Get user ID from URL params
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobileNumber: "",
//     id: "",
//   });
//   useEffect(() => {
//     async function fetchHalls() {
//       try {
//         const id = localStorage.getItem("user_id");
//         if (!id) {
//           throw new Error("User ID not found in localStorage");
//         }
//         console.log(id);
//         const token = localStorage.getItem("token");

//         await axios
//           .get(http://localhost:3006/api/admin/profile/${id}, {
//             headers: {
//               Authorization: Bearer ${token},
//             },
//           })
//           .then((res) => {
//             setUser(res.data);
//             setFormData({
//               name: res.data.admin_name,
//               email: res.data.admin_email,
//               mobileNumber: res.data.admin_mobile_no,
//               id: res.data.admin_id,
//             });
//             console.log(res.data);
//           });
//       } catch (error) {
//         console.error("Error fetching halls:", error);
//       }
//     }

//     fetchHalls();
//   }, []);

//   //   useEffect(() => {
//   //     async function fetchUserProfile() {
//   //       try {
//   //         const response = await fetch(
//   //           http://localhost:3006/api/admin/profile/${id}
//   //         )
//   //         if (!response.ok) {
//   //           throw new Error(HTTP error! Status: ${response.status})
//   //         }
//   //         const userData = await response.json()
//   //         setFormData(userData)
//   //       } catch (error) {
//   //         console.error('Error fetching user profile:', error.message)
//   //       }
//   //     }
//   //     fetchUserProfile()
//   //   }, [id])

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(formData);
//       const id = localStorage.getItem("user_id");
//       if (!id) {
//         throw new Error("User ID not found in localStorage");
//       }
//       console.log(id);
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         http://localhost:3006/api/admin/editProfile/${id},
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: Bearer ${token},
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       if (!response.ok) {
//         throw new Error(HTTP error! Status: ${response.status});
//       }
//       if (response.ok) {
//         alert("Profile updated successfully!");
//         window.location.reload(true);
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error.message);
//     }
//   };

//   return (
//     <>
//       {!editMode && (
//         <div className="container mt-4">
//           <h1 className="mb-4">Profile Page</h1>
//           {user && (
//             <table className="table">
//               <tbody>
//                 <tr>
//                   <th scope="row">ID</th>
//                   <td>{user.admin_id}</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">Name</th>
//                   <td>{user.admin_name}</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">Email</th>
//                   <td>{user.admin_email}</td>
//                 </tr>
//                 <tr>
//                   <th scope="row">Mobile Number</th>
//                   <td>{user.admin_mobile_no}</td>
//                 </tr>
//               </tbody>
//             </table>
//           )}
//           <button onClick={() => handleEdit()} className="btn btn-primary">
//             Edit
//           </button>
//         </div>
//       )}

//       {editMode && (
//         <div className="container mt-4">
//           <h1 className="mb-4">Edit Profile</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="id" className="form-label">
//                 ID
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="id"
//                 name="id"
//                 value={user.admin_id}
//                 readOnly
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 email
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="mobileNumber" className="form-label">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="mobileNumber"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Update
//             </button>
//           </form>
//           <button onClick={() => handleEdit()} className="btn btn-primary">
//             Cancel
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar1 from "./Navbar";

export default function ViewProfile() {
  const [user, setUser] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    id: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { id } = useParams(); // Get user ID from URL params

  useEffect(() => {
    async function fetchUserProfile() {
      const role = localStorage.getItem("userRole");
      if (role === "admin") {
        try {
          const userId = localStorage.getItem("user_id");
          if (!userId) {
            throw new Error("User ID not found in localStorage");
          }
          const token = localStorage.getItem("token");
          const response = await axios.get(
            `http://localhost:3006/api/admin/profile/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("resp : ", response.data);
          setUser(response.data);
          setFormData({
            name: response.data.admin_name,
            email: response.data.admin_email,
            mobileNumber: response.data.admin_mobile_no,
            id: response.data.admin_id,
          });
        } catch (error) {
          console.error("Error fetching user profile:", error.message);
        }
      } else {
        setIsUser(true);
        try {
          const userId = localStorage.getItem("user_id");
          if (!userId) {
            throw new Error("User ID not found in localStorage");
          }
          const token = localStorage.getItem("token");
          const response = await axios.get(
            `http://localhost:3006/api/user/getProfile/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("resp", response.data);
          setUser(response.data);
          setFormData({
            name: response.data.user_name,
            email: response.data.user_email,
            mobileNumber: response.data.user_mobile_no,
            id: response.data.user_id,
          });
        } catch (error) {
          console.error("Error fetching user profile:", error.message);
        }
      }
    }

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("user : ", user);

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile number must be 10 digits";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const userId = localStorage.getItem("user_id");
        if (!userId) {
          throw new Error("User ID not found in localStorage");
        }
        const token = localStorage.getItem("token");
        const response = await axios.put(
          `http://localhost:3006/api/admin/editProfile/${userId}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          alert("Profile updated successfully!");
          setEditMode(false);
          window.location.reload(true);
        }
      } catch (error) {
        console.error("Error updating profile:", error.message);
      }
    } else {
      setErrors(errors);
    }
  };

  function handleEdit() {
    setEditMode(!editMode);
  }

  async function handleUserDelete() {
    await axios
      .post(`http://localhost:3006/api/super/deleteUser`, {
        user_id: user.user_id,
      })
      .then((res) => {
        navigate(`/login`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar1 />
      {!editMode && !isUser && (
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
          <button onClick={handleEdit} className="btn btn-primary">
            Edit
          </button>
        </div>
      )}

      {!editMode && isUser && (
        <div className="container mt-4">
          <h1 className="mb-4">Profile Page</h1>
          {user && (
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">ID</th>
                  <td>{user.user_id}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{user.user_name}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{user.user_email}</td>
                </tr>
                <tr>
                  <th scope="row">Mobile Number : </th>
                  <td>{user.user_mobile_no}</td>
                </tr>
              </tbody>
            </table>
          )}
          <button onClick={handleEdit} className="btn btn-primary">
            Edit
          </button>
          <button onClick={handleUserDelete} className="btn btn-danger m-1">
            Delete Account
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
              {errors.name && <div className="text-danger">{errors.name}</div>}
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
                value={user?.admin_id || ""}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
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
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              {errors.mobileNumber && (
                <div className="text-danger">{errors.mobileNumber}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              onClick={handleEdit}
              className="btn btn-secondary ms-2"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}
