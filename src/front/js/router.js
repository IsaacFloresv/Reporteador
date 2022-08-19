import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context and Navigation
import injectContext from "./store/appContext";
import OffcanvasSidebar from "./components/Dashboard-sidebar/Offcanvas-sidebar.jsx";

// Pages
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Documentos from "./pages/documentos/Documentos.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Landing from "./pages/landing-page/Landing.jsx";
import Clientes from "./pages/clientes/Clientes.jsx";
import Tareas from "./pages/tareas/Tareas.jsx";
import Casos from "./pages/casos/Casos.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/SignUp/Signup.jsx";
import NewClient from "./pages/clientes/NewClient.jsx";
import NewCase from "./pages/casos/NewCase.jsx";




//create your first component
const Router = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <OffcanvasSidebar />
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/registro" />
          {/* Dashboard Layout */}
          <Route element={<DashboardLayout />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Casos />} path="/casos" />
            <Route element={<NewCase />} path="/nuevo-caso" />
            <Route element={<Clientes />} path="/clientes" />
            <Route element={<Documentos />} path="/documentos" />
            <Route element={<Tareas />} path="/tareas" />
            <Route element={<NewClient/>} path="/nuevo-cliente"/>
            <Route element={<NewCase/>} path="/nuevo-caso"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Router);
