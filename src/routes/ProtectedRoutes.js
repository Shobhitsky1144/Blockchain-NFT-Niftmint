import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import HomeHeader from "../components/headers/HomeHeader";

export default function ProtectedRoutes({ children }) {
  const auth = JSON.parse(localStorage.getItem("auth_user"));
  return auth ? (
    <>
      {/* <HomeHeader /> */}
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
}
