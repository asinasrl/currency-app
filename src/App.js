import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exchanger from "./Exchanger";
import Home from "./Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/convert" element={<Exchanger />}></Route>
        <Route path="*" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
