import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';
import Books from './components/pages/Books';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
