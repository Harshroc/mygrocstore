import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children, token }) {
  
    return token ? children : <Navigate to="/" />;
  
}

export default ProtectedRoutes;