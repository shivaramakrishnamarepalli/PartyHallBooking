import "./App.css";
import CardsDisplay from "./components/CardsDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditAndDeleteHall from "./components/EditAndDeleteHall";
import RequestToAddHall from "./components/RequestToAddHall";
import SpecificCard from "./components/SpecificCard";
import HallForm from "./components/HallForm";
import Login from "./components/Login";
import HomeComponent from "./components/HomeComponent";
import CenterSpecificHall from "./components/CenterSpecificHall";
import Home from "./components/Home";
import UserBookings from "./components/UserBookings";
import RoleSelection from "./components/RoleSelection";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      {/* <h1>React App</h1> */}
      {/* <CardsDisplay /> */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<RoleSelection />} />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/home" element={<Home />} />
          {/* common routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="*" element={<>default page</>} />

          {/* user routes */}
          <Route path="/user/home" element={<HomeComponent />} />
          <Route path="/user/hall/:id" element={<CenterSpecificHall />} />
          <Route path="/user/bookings" element={<UserBookings />} />

          {/* admin routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <Routes>
                  {/* <Route path="admin/home" element={<Home/>}/> */}
                  <Route path="/addHall" element={<HallForm />} />
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
