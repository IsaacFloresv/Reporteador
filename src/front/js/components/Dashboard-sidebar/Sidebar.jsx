import React from "react";

// Import Logo
import logo from "../../../../../public/assets/logo.png";

// Import icons
import { MdOutlineDashboard } from "react-icons/md";
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
      url: "/dashboard",
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
      <ul className="nav flex-column mb-auto mt-2">
        {menu.map((link, index) => {
          return (
            <Link to={link.url} className="text-black text-decoration-none">
              <div
                key={index}
                className="px-3 py-2 d-flex align-content-center hover-menu rounded"
              >
                {link.icon}
                <li
                  className="mx-2 fw-semibold"
                  style={{ marginTop: 4 + "px" }}
                >
                  {link.name}
                </li>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
