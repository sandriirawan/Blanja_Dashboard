import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaShoppingBag,
  FaTag,
  FaCartArrowDown,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/category",
      name: "Category",
      icon: <FaTag />,
    },
    {
      path: "/transaction",
      name: "Transaction",
      icon: <FaCartArrowDown />,
    },
    {
      path: "/user",
      name: "User",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className="containerr">
      <div style={{ width: isOpen ? "288px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            <h1
              className="logo"
              style={{
                display: isOpen ? "block" : "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={require("../sidebar/Vector.png")}
                alt="Blanja"
                style={{ marginRight: "10px" }}
              />
              Blanja
            </h1>
          </div>

          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
            style={{
              marginBottom: "10px",
              marginLeft: isOpen ? "20px" : "0px",
              marginRight: isOpen ? "20px" : "0px",
            }}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <button
          type="sumbit"
          className="logout"
          style={{
            marginBottom: "10px",
            marginLeft: isOpen ? "20px" : "0px",
            marginRight: isOpen ? "20px" : "0px",
          }}
        >
          <div className="icon">
            <FaSignOutAlt />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Logout
          </div>
        </button>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
