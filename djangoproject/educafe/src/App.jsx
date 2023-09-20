import React from 'react';
import cheb from '../src/assets/cheb.jpeg'

import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Students, Teacher, Teach, Form, Page, Post } from './components';
import Card from '../src/components/card/Card' // Import Card separately if it's not part of the components export
// import Navbar from './components';
function App() {
  return (
    <>
  
    <Router>
    <Routes>
  <Route path="/" element={<Form />} />
  <Route path="/students" element={<Students />} />
  <Route path="/teacher" element={<Teacher />} />
  <Route path="/teach" element={<Teach />} />
  <Route path="/teach/card" element={<Card />} />
  <Route path="/page" element={<Page />} />
  {/* <Route path="/Navbar" element={<Navbar />} /> */}
  <Route path="/students/card" element={<Card />} />
   {/* <Route path="/teach/card" element={<Card/> }/> */}
  
</Routes>
</Router>

    </>
  );
}

export default App;
