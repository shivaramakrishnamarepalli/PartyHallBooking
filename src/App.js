import "./App.css";
import CardsDisplay from "./components/CardsDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditAndDeleteHall from "./components/EditAndDeleteHall";
import RequestToAddHall from "./components/RequestToAddHall";
import SpecificCard from "./components/SpecificCard";
import HallForm from "./components/HallForm";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  return (
    <>
      {/* <h1>React App</h1> */}
      {/* <CardsDisplay /> */}
      <BrowserRouter>
        <Routes>

          {/* common routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="*" element={<>default page</>} />

          {/* user routes */}
          <Route path="/user/home" element={<Home />} />
          


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
