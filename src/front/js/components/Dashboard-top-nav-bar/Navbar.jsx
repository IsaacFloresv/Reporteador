import React from "react";
// Icons
import { IoNotificationsOutline, IoHelpBuoyOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-end"
      style={{ backgroundColor: "white", height: 50 + "px" }}
    >
      {/* Help Icon */}
      <div className="px-4 border-start border-end h-100 d-flex align-items-center">
        <IoHelpBuoyOutline size={22} />
      </div>

      {/* Notification Icon */}
      <div className="px-4 border-end h-100 d-flex align-items-center">
        <IoNotificationsOutline size={22} />
        <span
          class="fw-normal position-absolute translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center px-1"
          style={{ height: 15 }}
        >
          5
        </span>
      </div>

      {/* User profile */}
      <div className="btn d-flex align-items-center dropdown-toggle px-4">
        <img
          src="https://images.unsplash.com/photo-1571844306146-6f7451d80824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          alt="profile-picture"
          className="rounded shadow"
          style={{
            width: 35,
            height: 35,
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
        <h6 className="px-3">Alexandra Irene</h6>
      </div>
    </div>
  );
};

export default Navbar;
