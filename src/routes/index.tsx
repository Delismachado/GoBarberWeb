import React from "react";

import { Route, Routes as ReactRoutes, useParams } from "react-router-dom";
import RequireLogin from "./RequireLogin";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import NewAppointment from "../pages/NewAppointment";

const Routes: React.FC = () => (
    <ReactRoutes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
            path="/dashboard"
            element={
                <RequireLogin>
                    <Dashboard />
                </RequireLogin>
            }
        />
        <Route
            path="/appointments/new"
            element={
                <RequireLogin>
                    <NewAppointment />
                </RequireLogin>
            }
        />
        <Route
            path="/profile"
            element={
                <RequireLogin>
                    <Profile />
                </RequireLogin>
            }
        />
    </ReactRoutes>
);

export default Routes;
