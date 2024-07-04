// import React, { useState } from "react";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../styles/editHall.css";

// const Login = () => {
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [signupFormVisible, setSignupFormVisible] = useState(false);
//   const [user, setUser] = useState({
//     user_id: "",
//     user_name: "",
//     user_email: "",
//     user_password: "",
//     user_age: "",
//     user_mobile_no: "",
//   });

//   const navigate = useNavigate();
//   const handleMove = () => {
//     navigate(`/user/home`);
//   };
//   const handleMoveAdmin = () => {
//     navigate(`/admin/home`);
//   };

//   const handleLogin = async () => {
//     let userRole = localStorage.getItem("userRole");
//     console.log(userRole);
//     if (userRole === "admin") {
//       console.log(userId, password);
//       if (userId && password) {
//         console.log("hi");
//         await axios
//           .post("http://localhost:3006/api/admin/login", {
//             admin_id: userId,
//             admin_password: password,
//           })
//           .then((res) => {
//             console.log("success");
//             const { token } = res.data;
//             localStorage.setItem("user_id", userId);
//             localStorage.setItem("token", token);
//             handleMoveAdmin();
//             return;
//           })
//           .catch((err) => {
//             alert("Invalid Credentials!");
//           });
//         return;
//       }
//       return;
//     }

//     if (!userId || !password) {
//       alert("User ID and password are required.");
//       return;
//     }
//     console.log("handle");
//     await axios
//       .post("http://localhost:3006/api/user/login", {
//         user_id: userId,
//         user_password: password,
//       })
//       .then((res) => {
//         console.log("success");
//         const { token } = res.data;
//         localStorage.setItem("user_id", userId);
//         localStorage.setItem("token", token);
//         handleMove();
//       })
//       .catch((err) => {
//         alert("Invalid Credentials!");
//       });
//   };

//   const handleSignup = async () => {
//     try {
//       const { user_name, user_email, user_password, user_age, user_mobile_no } =
//         user;

//       if (
//         !user_name ||
//         !user_email ||
//         !user_password ||
//         !user_age ||
//         !user_mobile_no
//       ) {
//         alert("All fields are mandatory.");
//         return;
//       }

//       // Generate a random 4-character string for user ID
//       const userId = generateUserId();

//       let userRole = localStorage.getItem("userRole");
//       console.log(userRole);
//       if (userRole === "admin") {
//         const response = await axios.post(
//           "http://localhost:3006/api/admin/signup",
//           {
//             admin_name: user_name,
//             admin_email: user_email,
//             admin_password: user_password,
//             admin_age: user_age,
//             admin_mobile_no: user_mobile_no,
//             admin_id: userId,
//           }
//         );
//         const { token } = response.data;
//         localStorage.setItem("user_id", userId);
//         localStorage.setItem("token", token);

//         alert(`Signup successful! Login with you new id "${userId}"`);

//         setUserId(userId);
//         setPassword(user.user_password);
//         setSignupFormVisible(false);
//         return;
//       }

//       const response = await axios.post(
//         "http://localhost:3006/api/user/signup",
//         { ...user, user_id: userId }
//       );

//       const { token } = response.data;
//       localStorage.setItem("user_id", userId);
//       localStorage.setItem("token", token);
//       // Redirect or perform any necessary actions upon successful signup

//       // Automatically log in after signup
//       setSignupFormVisible(false);
//       setUserId(userId);
//       setPassword(user.user_password);

//       alert(`Signup successful! Login with you new id "${userId}"`);
//       return;
//     } catch (error) {
//       console.error("Error signing up:", error);
//       alert("Error signing up. Please try again.");
//     }
//   };

//   const generateUserId = () => {
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let result = "";
//     for (let i = 0; i < 4; i++) {
//       result += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     return result;
//   };

//   const toggleSignupForm = () => {
//     setSignupFormVisible(!signupFormVisible);
//   };

//   const handleInputChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       {!signupFormVisible && (
//         <div className="container">
//           <h2>Login </h2>
//           <Form>
//             <FormGroup>
//               <Label for="userId">User ID</Label>
//               <Input
//                 type="text"
//                 name="userId"
//                 id="userId"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//             <Button onClick={handleLogin} className="btn-success">
//               Login
//             </Button>
//             <Button onClick={toggleSignupForm} className="m-2 btn-dark">
//               {signupFormVisible ? "Back to Login" : " Go to Signup"}
//             </Button>
//           </Form>
//         </div>
//       )}

//       {signupFormVisible && (
//         <div className="container">
//           <h2>Signup</h2>
//           <Form>
//             <FormGroup>
//               <Label for="userName">Name</Label>
//               <Input
//                 type="text"
//                 name="user_name"
//                 id="userName"
//                 value={user.user_name}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="userEmail">Email</Label>
//               <Input
//                 type="email"
//                 name="user_email"
//                 id="userEmail"
//                 value={user.user_email}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="userPassword">Password</Label>
//               <Input
//                 type="password"
//                 name="user_password"
//                 id="userPassword"
//                 value={user.user_password}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="userAge">Age</Label>
//               <Input
//                 type="number"
//                 name="user_age"
//                 id="userAge"
//                 value={user.user_age}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="userMobileNo">Mobile Number</Label>
//               <Input
//                 type="tel"
//                 name="user_mobile_no"
//                 id="userMobileNo"
//                 value={user.user_mobile_no}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <Button onClick={handleSignup} className="btn-success">
//               Signup
//             </Button>
//             <Button onClick={toggleSignupForm} className="m-2 btn-dark">
//               {signupFormVisible ? "Back to Login" : "Go to Signup"}
//             </Button>
//           </Form>
//         </div>
//       )}

//       <br />

//       {/* <Button onClick={toggleSignupForm}>
//         {signupFormVisible ? 'Back to Login' : 'Signup'}
//       </Button> */}
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/editHall.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [signupFormVisible, setSignupFormVisible] = useState(false);
  const [user, setUser] = useState({
    user_id: "",
    user_name: "",
    user_email: "",
    user_password: "",
    user_age: "",
    user_mobile_no: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleMove = () => {
    navigate(`/user/home`);
  };
  const handleMoveAdmin = () => {
    navigate(`/admin/home`);
  };

  const validateLogin = () => {
    let errors = {};
    if (!userId) {
      errors.userId = "User ID is required.";
    }
    if (!password) {
      errors.password = "Password is required.";
    }
    return errors;
  };

  const validateSignup = () => {
    let errors = {};
    if (!user.user_name) {
      errors.user_name = "Name is required.";
    }
    if (!user.user_email) {
      errors.user_email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(user.user_email)) {
      errors.user_email = "Email is invalid.";
    }
    if (!user.user_password) {
      errors.user_password = "Password is required.";
    }
    if (!user.user_age) {
      errors.user_age = "Age is required.";
    } else if (isNaN(user.user_age) || user.user_age <= 0) {
      errors.user_age = "Age must be a positive number.";
    }
    if (!user.user_mobile_no) {
      errors.user_mobile_no = "Mobile Number is required.";
    } else if (!/^\d{10}$/.test(user.user_mobile_no)) {
      errors.user_mobile_no = "Mobile Number must be 10 digits.";
    }
    return errors;
  };

  const handleLogin = async () => {
    const errors = validateLogin();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});
    let userRole = localStorage.getItem("userRole");
    if (userRole === "admin") {
      if (userId && password) {
        await axios
          .post("http://localhost:3006/api/admin/login", {
            admin_id: userId,
            admin_password: password,
          })
          .then((res) => {
            const { token } = res.data;
            localStorage.setItem("user_id", userId);
            localStorage.setItem("token", token);
            handleMoveAdmin();
          })
          .catch((err) => {
            alert("Invalid Credentials!");
          });
      }
      return;
    }

    await axios
      .post("http://localhost:3006/api/user/login", {
        user_id: userId,
        user_password: password,
      })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("user_id", userId);
        localStorage.setItem("token", token);
        handleMove();
      })
      .catch((err) => {
        alert("Invalid Credentials!");
      });
  };

  const handleSignup = async () => {
    const errors = validateSignup();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});
    try {
      const { user_name, user_email, user_password, user_age, user_mobile_no } =
        user;

      const userId = generateUserId();

      let userRole = localStorage.getItem("userRole");
      if (userRole === "admin") {
        const response = await axios.post(
          "http://localhost:3006/api/admin/signup",
          {
            admin_name: user_name,
            admin_email: user_email,
            admin_password: user_password,
            admin_age: user_age,
            admin_mobile_no: user_mobile_no,
            admin_id: userId,
          }
        );
        const { token } = response.data;
        localStorage.setItem("user_id", userId);
        localStorage.setItem("token", token);

        alert(`Signup successful! Login with your new ID "${userId}"`);

        setUserId(userId);
        setPassword(user.user_password);
        setSignupFormVisible(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:3006/api/user/signup",
        { ...user, user_id: userId }
      );

      const { token } = response.data;
      localStorage.setItem("user_id", userId);
      localStorage.setItem("token", token);

      setSignupFormVisible(false);
      setUserId(userId);
      setPassword(user.user_password);

      alert(`Signup successful! Login with your new ID "${userId}"`);
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up. Please try again.");
    }
  };

  const generateUserId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const toggleSignupForm = () => {
    setSignupFormVisible(!signupFormVisible);
    setErrors({});
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {!signupFormVisible && (
        <div className="container">
          <h2>Login</h2>
          <Form>
            <FormGroup>
              <Label for="userId">User ID</Label>
              <Input
                type="text"
                name="userId"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              {errors.userId && <p className="text-danger">{errors.userId}</p>}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </FormGroup>
            <Button onClick={handleLogin} className="btn-success">
              Login
            </Button>
            <Button onClick={toggleSignupForm} className="m-2 btn-dark">
              {signupFormVisible ? "Back to Login" : "Go to Signup"}
            </Button>
          </Form>
        </div>
      )}

      {signupFormVisible && (
        <div className="container">
          <h2>Signup</h2>
          <Form>
            <FormGroup>
              <Label for="userName">Name</Label>
              <Input
                type="text"
                name="user_name"
                id="userName"
                value={user.user_name}
                onChange={handleInputChange}
              />
              {errors.user_name && (
                <p className="text-danger">{errors.user_name}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="userEmail">Email</Label>
              <Input
                type="email"
                name="user_email"
                id="userEmail"
                value={user.user_email}
                onChange={handleInputChange}
              />
              {errors.user_email && (
                <p className="text-danger">{errors.user_email}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="userPassword">Password</Label>
              <Input
                type="password"
                name="user_password"
                id="userPassword"
                value={user.user_password}
                onChange={handleInputChange}
              />
              {errors.user_password && (
                <p className="text-danger">{errors.user_password}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="userAge">Age</Label>
              <Input
                type="number"
                name="user_age"
                id="userAge"
                value={user.user_age}
                onChange={handleInputChange}
              />
              {errors.user_age && (
                <p className="text-danger">{errors.user_age}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="userMobileNo">Mobile Number</Label>
              <Input
                type="tel"
                name="user_mobile_no"
                id="userMobileNo"
                value={user.user_mobile_no}
                onChange={handleInputChange}
              />
              {errors.user_mobile_no && (
                <p className="text-danger">{errors.user_mobile_no}</p>
              )}
            </FormGroup>
            <Button onClick={handleSignup} className="btn-success">
              Signup
            </Button>
            <Button onClick={toggleSignupForm} className="m-2 btn-dark">
              {signupFormVisible ? "Back to Login" : "Go to Signup"}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Login;
