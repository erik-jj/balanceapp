import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/index";
import CreateAccount from "../pages/create-account/index";
import Login from "../pages/login/index";
import PasswordChange from "../pages/password-change/index";
import PasswordRecovery from "../pages/password-recovery/index";
import EmailVerify from "../pages/email-verify/index";
import Dashboard from "../pages/private/dashboard";
import PrivateRoutes from "../utils/private-routes";
import Reasons from "../pages/private/reasons";
import Registers from "../pages/private/registers";
import Profile from "../pages/private/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/password-recovery" element={<PasswordRecovery />}></Route>
        <Route path="/password-change" element={<PasswordChange />}></Route>
        <Route path="/email-verify" element={<EmailVerify />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Dashboard />}></Route>
          <Route path="/reasons" element={<Reasons />}></Route>
          <Route path="/registers" element={<Registers />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="*" element={<p>Not found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
