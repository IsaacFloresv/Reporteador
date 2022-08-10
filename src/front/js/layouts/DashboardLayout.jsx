import React from "react";

// Components
import Navbar from "../components/Dashboard-top-nav-bar/Navbar.jsx";
import Sidebar from "../components/Dashboard-sidebar/Sidebar.jsx";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="d-flex">
        <div className="d-none d-xl-block ">
          <Sidebar />
        </div>
        <div className="bg-light vw-100">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
