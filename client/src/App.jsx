import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import Wellcome from './components/pages/Wellcome';
import Ebook from './components/pages/Ebook';
import Store from './components/pages/Store';
import Contacts from './components/pages/Contacts';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wellcome" element={<Wellcome />} />
        <Route path="/eBook" element={<Ebook />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
