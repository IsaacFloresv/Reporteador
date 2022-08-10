import React from "react";
import Sidebar from "./Sidebar.jsx";

const OffcanvasSidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <button
        type="button"
        className="btn-close p-4 position-absolute top-0 end-0"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <Sidebar />
    </div>
  );
};

export default OffcanvasSidebar;
