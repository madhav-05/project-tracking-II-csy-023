import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSide from "./login";
import Dashboard from "./home";
import SignUp from "./signup";
function Routar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routar;
