import logo from './logo.svg';
import './App.css';
import React from 'react';
import Landing from './pages/es/landing.jsx';
import Carta from './pages/es/carta.jsx';
import Gastronomia from './pages/es/gastronomia.jsx';
import Contacto from './pages/es/contacto.jsx';
import Reservas from './pages/es/reservas.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path='/carta' element={<Carta></Carta>}></Route>
        <Route path='/gastronomia' element ={<Gastronomia></Gastronomia>}></Route>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route path='/reservas' element = {<Reservas></Reservas>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
