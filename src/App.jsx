import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ChatNow from './pages/Chat-Now/ChatNow';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      {/* Navbar will be visible on all pages */}
      <Navbar />
      
      {/* Define routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<ChatNow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
// import React from 'react'

// const App = () => {
//   return (
//     <div className='text-green-600 underline'>App</div>
//   )
// }

// export default App
