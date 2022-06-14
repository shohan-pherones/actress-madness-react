import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Blogs />} />
          <Route exact path="/home" element={<Blogs />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
