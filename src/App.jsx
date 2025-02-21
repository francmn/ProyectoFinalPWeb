import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./pages/Home.jsx";
import ProtectedRoute from "./services/ProtectedRoute.jsx";
import Settings from "./pages/Settings.jsx"
import Projects from "./pages/Projects.jsx"
import ProjectDetail from "./components/ProjectDetail/ProjectDetail.jsx";
import Stories from "./pages/Stories.jsx"
import StoriesList from "./components/StoriesList/StoriesList.jsx";
import Epics from "./pages/Epics.jsx";
import EpicDetail from "./components/EpicDetail/EpicDetail.jsx";
import authService from "./services/authService.jsx";
import StoryDetail from "./components/StoryDetail/StoryDetail.jsx";
import AllTasksList from "./components/TasksList/AllTasksList.jsx"
import TasksList from "./components/TasksList/TasksList.jsx"
import TaskDetail from "./components/TaskDetail/TaskDetail.jsx"
import ThemeContext from "./services/ThemeContext.jsx";
import { useState, useEffect } from "react";
import './styles.css'


const App = () => {

  const isAuthenticated = authService.isAuthenticated === "true"
  
  const [theme, setTheme] = useState("light");
    
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <main className={`App ${theme}`}>
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />

        {/* Rutas Protegidas */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
            <ThemeContext.Provider  value={{theme, handleThemeChange}}>
              <Settings />
              </ThemeContext.Provider>
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
          path="my-projects/:projectId"
          element={
            <ProtectedRoute>
              <ProjectDetail />
            </ProtectedRoute>
          }
        />
          <Route
          path="my-projects/:projectId/epics"
          element={
            <ProtectedRoute>
              <Epics />
            </ProtectedRoute>
          }
        />
          <Route
          path="my-projects/:projectId/:epicId"
          element={
            <ProtectedRoute>
              <EpicDetail />
            </ProtectedRoute>
          }
        />
          <Route
          path="my-projects/:projectId/:epicId/stories"
          element={
            <ProtectedRoute>
              <StoriesList />
            </ProtectedRoute>
          }
        />
          <Route
          path="my-projects/:projectId/:epicId/:storyId"
          element={
            <ProtectedRoute>
              <StoryDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="my-projects/:projectId/:epicId/:storyId/tasks"
          element={
            <ProtectedRoute>
              <TasksList />
            </ProtectedRoute>
          }
        />
         <Route
          path="my-projects/:projectId/:epicId/:storyId/:taskId"
          element={
            <ProtectedRoute>
              <TaskDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/epics"
          element={
            <ProtectedRoute>
              <Epics/>
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
          <Route
          path="/my-stories/:storyId"
          element={
            <ProtectedRoute>
              <StoryDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <AllTasksList />
            </ProtectedRoute>
          }
        />
        
        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </main>
  );
};

export default App;
