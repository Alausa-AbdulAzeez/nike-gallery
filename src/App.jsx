import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleItem from "./components/SingleItem";

/**
 * Main component of the app that handles video streaming, drawing bounding box, and capturing frame.
 */
const App = () => {
  const images = [
    "https://images.pexels.com/photos/20643866/pexels-photo-20643866/free-photo-of-modern-skyscraper-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/8259263/pexels-photo-8259263.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/26442630/pexels-photo-26442630/free-photo-of-a-row-of-empty-seats-in-a-stadium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/25542632/pexels-photo-25542632/free-photo-of-coffee-pot-and-coffee-cup-on-window-sill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/22276426/pexels-photo-22276426/free-photo-of-garden-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20673012/pexels-photo-20673012/free-photo-of-field-of-a-round-leafed-cacti.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11163069/pexels-photo-11163069.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/item" element={<SingleItem images={images} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
