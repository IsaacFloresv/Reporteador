import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context and Navigation
import injectContext from "./store/appContext";
import DashboardLayouts from "./layouts/DashboardLayout.jsx";
import OffcanvasSidebar from "./components/Dashboard-sidebar/Offcanvas-sidebar.jsx";

// Pages
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Documentos from "./pages/documentos/Documentos.jsx";
import Clientes from "./pages/clientes/Clientes.jsx";
import Casos from "./pages/casos/Casos.jsx";
import Tareas from "./pages/tareas/Tareas.jsx";

//create your first component
const Router = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <OffcanvasSidebar />
        <DashboardLayouts>
          <Routes>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Casos />} path="/casos" />
            <Route element={<Clientes />} path="/clientes" />
            <Route element={<Documentos />} path="/documentos" />
            <Route element={<Tareas />} path="/tareas" />
          </Routes>
        </DashboardLayouts>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Router);
