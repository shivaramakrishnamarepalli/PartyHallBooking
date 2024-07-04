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
import ProtectedRouteUser from "./components/ProtectedRouteUser";
import UserBookings from "./components/UserBookings";
import RoleSelection from "./components/RoleSelection";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminHome from "./components/AdminHome";
import SuperAdmin from "./components/SuperAdmin";
import ViewProfile from "./components/ViewProfile";
import Navbar1 from "./components/Navbar";
import SpecificAdminCard from "./components/SpecificAdminCard";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import AboutPage from "./components/About";

function App() {
  return (
    <>
      {/* <h1>React App</h1> */}
      {/* <CardsDisplay /> */}
      {/* <Navbar1></Navbar1> */}
      {/* <Navbar1 /> */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<RoleSelection />} />
          <Route path="/role" element={<RoleSelection />} />
          {/* <Route path="/home" element={<Home />} /> */}
          {/* common routes */}
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="*" element={<>default page</>} />

          {/* user routes */}
          <Route
            path="/user/*"
            element={
              <ProtectedRouteUser>
                <Routes>
                  {/* <Route path="admin/home" element={<Home/>}/> */}
                  <Route path="home" element={<HomeComponent />} />
          <Route path="hall/:id" element={<CenterSpecificHall />} />
          <Route path="bookings" element={<UserBookings />} />
                  {/* //problem */}
                </Routes>
              </ProtectedRouteUser>
            }
          />
          

          {/* admin routes */}
          <Route path="/profile" element={<ViewProfile />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <Routes>
                  {/* <Route path="admin/home" element={<Home/>}/> */}
                  <Route path="addHall" element={<HallForm />} />
                  <Route path="home" element={<AdminHome />} />
                  <Route path="" element={<AdminHome />} />
                  <Route path="/hall/:id" element={<SpecificAdminCard />} />
                  {/* //problem */}
                </Routes>
              </ProtectedRoute>
            }
          />

          <Route path="/super/private-key/home" element={<SuperAdmin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
