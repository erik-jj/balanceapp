import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/index";
import CreateAccount from "../pages/create-account/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="*" element={<p>Not found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
