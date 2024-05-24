import './App.css'
import CardsDisplay from './components/CardsDisplay'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <h1>React App</h1>
      {/* <CardsDisplay /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/cards" element={<CardsDisplay />} />
          <Route path="/admin/editHall" element={<EditAndDelteHall />} />
          <Route path="/admin/addHall" element={<RequestToAddHall />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
