import './App.css';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/technology/Technology';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
