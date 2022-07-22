import "./App.css";
import React from "react";
import SingleItem from "./single-item";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FindItem } from "./find-item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingleItem />}></Route>
        <Route path="/find-item/:id" element={<FindItem />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
