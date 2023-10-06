// routes/Router.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

const Router = () => (
  <Routes>
    <Route path="/" exact element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default Router;
