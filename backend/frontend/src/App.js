import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Home from './pages/home/Home'
import List from './pages/list/List';
import Buses from './pages/buses/Buses';

function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/buses' element={<List/>} />
    <Route path='/buses/:id' element={<Buses/>} /> 
  </Routes>
  </BrowserRouter>
 )
}

export default App;