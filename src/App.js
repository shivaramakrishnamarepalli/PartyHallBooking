import './App.css'
import CardsDisplay from './components/CardsDisplay'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditAndDeleteHall from './components/EditAndDeleteHall'
import RequestToAddHall from './components/RequestToAddHall'
function App() {
  return (
    <>
      <h1>React App</h1>
      {/* <CardsDisplay /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/cards" element={<CardsDisplay />} />
          <Route path="/admin/edit" element={<EditAndDeleteHall />} />
          <Route path="/admin/add" element={<RequestToAddHall />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
