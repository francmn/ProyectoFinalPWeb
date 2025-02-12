import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ProtectedRoute from "./services/ProtectedRoute.jsx";
import Settings from "./pages/Settings/Settings.jsx"
import Projects from "./pages/Projects.jsx"
import Stories from "./pages/Stories.jsx"
import "./index.css"
import authService from "./services/authService.jsx";

const App = () => {

  const isAuthenticated = authService.isAuthenticated === "true";

  return (
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />

        {/* Rutas Protegidas */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
          <Route
          path="/my-stories"
          element={
            <ProtectedRoute>
              <Stories />
            </ProtectedRoute>
          }
        />
        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
