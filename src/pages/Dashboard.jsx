// Dashboard.jsx
import React from "react";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Dashboard;
