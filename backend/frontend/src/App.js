import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Home from './pages/home/Home'
import List from './pages/list/List';
import Buses from './pages/buses/Buses';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AdminHome from './pages/adminHome/AdminHome';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {isAdmin}= useContext(AuthContext)
 return (
  <BrowserRouter>
  <Routes>
    
    <Route path='/' element={<Home/>} />
    <Route path='/buses' element={<List/>} />
    <Route path='/buses/:id' element={<Buses/>} /> 
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    
   {isAdmin && <Route path='/adminboard' element={<AdminHome/> } /> } 
  </Routes>
  </BrowserRouter>
 )
}

export default App;
