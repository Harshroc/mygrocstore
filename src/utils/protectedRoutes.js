import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoutes({ children, token }) {
  
    return token ? children : <Navigate to="/" />;
  
}

export default ProtectedRoutes;