import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="*" element={<p>Not found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
