import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/auth";

const RequireLogin = function ({ children, redirectTo }) {
    const { user } = useAuth();
    return user ? children : <Navigate to={redirectTo} />;
};

export default RequireLogin;
