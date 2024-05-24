import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [signupFormVisible, setSignupFormVisible] = useState(false);
  const [user, setUser] = useState({
    user_id: '',
    user_name: '',
    user_email: '',
    user_password: '',
    user_age: '',
    user_mobile_no: ''
  });

  const navigate = useNavigate();
  const handleMove = () => {
    navigate(`/user/home`);
  };

  const handleLogin = async (userid="",userpass="") => {
    if(userid && userpass){
        await axios.post('http://localhost:3006/api/user/login', {
        user_id:userid,
        user_password:userpass
      }).then(res => {
        console.log("success")
        const { token } = res.data;
        localStorage.setItem('user_id', userId);
        localStorage.setItem('token', token);
        handleMove()
      })
      .catch(err => {alert("Invalid Credentials!")})
      return
    }
      if (!userId || !password) {
        alert("User ID and password are required.");
        return;
      }
  console.log("handle")
    await axios.post('http://localhost:3006/api/user/login', {
        user_id:userId,
        user_password:password
      }).then(res => {
        console.log("success")
        const { token } = res.data;
        localStorage.setItem('user_id', userId);
        localStorage.setItem('token', token);
        handleMove()
      })
      .catch(err => {alert("Invalid Credentials!")})    
  };
  
  const handleSignup = async () => {
    try {
      const { user_name, user_email, user_password, user_age, user_mobile_no } = user;
  
      if (!user_name || !user_email || !user_password || !user_age || !user_mobile_no) {
        alert("All fields are mandatory.");
        return;
      }
  
      // Generate a random 4-character string for user ID
      const userId = generateUserId();
  
      const response = await axios.post('http://localhost:3006/api/user/signup', { ...user, user_id:userId });
      const { token } = response.data;
      localStorage.setItem('user_id', userId);
      localStorage.setItem('token', token);
      alert("Signup successful.");
      // Redirect or perform any necessary actions upon successful signup
  
      // Automatically log in after signup
      handleLogin(userId,user_password);
    } catch (error) {
      console.error('Error signing up:', error);
      alert("Error signing up. Please try again.");
    }
  };
  
  const generateUserId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  

  const toggleSignupForm = () => {
    setSignupFormVisible(!signupFormVisible);
  };

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
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
        </FormGroup>
        <Button onClick={handleLogin}>Login</Button>
      </Form>

      <br />

      <Button onClick={toggleSignupForm}>Signup</Button>
      
      {signupFormVisible && (
        <div>
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
            </FormGroup>
            <Button onClick={handleSignup}>Signup</Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Login;
