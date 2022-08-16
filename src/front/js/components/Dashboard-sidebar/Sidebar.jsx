import React from "react";

// Import Logo
import logo from "../../../../../public/assets/logo.png";

// Import icons
import { MdOutlineDashboard } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";

// Route functions
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard height={20} className="mt-2" />,
      url: "/",
    },
    {
      name: "Mis Tareas",
      icon: <GrTask height={20} className="mt-2" />,
      url: "/tareas",
    },
    {
      name: "Clientes",
      icon: <TbUsers height={20} className="mt-2" />,
      url: "/clientes",
    },
    {
      name: "Casos",
      icon: <HiOutlineBriefcase height={20} className="mt-2" />,
      url: "/casos",
    },
    {
      name: "Documentos",
      icon: <IoDocumentTextOutline height={20} className="mt-2" />,
      url: "/documentos",
    },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 px-3 py-2"
      style={{ width: 280 + "px", height: 100 + "vh" }}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          className="mb-3 mt-1"
          style={{ width: 55 + "%" }}
        />
      </div>

      {/* Menu */}
      <ul className="nav flex-column mb-auto px-3 mt-2">
        {menu.map((link, index) => {
          return (
            <div key={index} className="py-3 d-flex align-content-center">
              {link.icon}
              <Link to={link.url} className="text-black text-decoration-none">
                <li
                  className="mx-2 fw-semibold"
                  style={{ marginTop: 5 + "px" }}
                >
                  {link.name}
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
