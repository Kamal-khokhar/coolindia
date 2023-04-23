import React from 'react';
import './App.css';
import ContactUs from './features/contactus/ContactUs';
import BlogPage from './features/blogpage/blogpage';
import HomePage from './features/home/home';
import PublicRouting from './routing/PublicRouting';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/Blogs" element={<BlogPage />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <HomePage /> */}
      <PublicRouting/>
    </div>
  );
}

export default App;