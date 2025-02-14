import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ProtectedRoute from "./services/ProtectedRoute.jsx";
import Settings from "./pages/Settings/Settings.jsx"
import Projects from "./pages/Projects.jsx"
import ProjectDetail from "./components/ProjectDetail/ProjectDetail.jsx";
import Stories from "./pages/Stories.jsx"
import StoriesList from "./components/StoriesList/StoriesList.jsx";
import Epics from "./pages/Epics.jsx";
import EpicDetail from "./components/EpicDetail/EpicDetail.jsx";
import "./index.css"
import authService from "./services/authService.jsx";
import StoryDetail from "./components/StoryDetail/StoryDetail.jsx";
import AllTasksList from "./components/TasksList/AllTasksList.jsx"
import TasksList from "./components/TasksList/TasksList.jsx"
import TasksDetail from "./components/TaskDetail/TaskDetail.jsx"


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
              <TasksDetail />
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
  );
};

export default App;
