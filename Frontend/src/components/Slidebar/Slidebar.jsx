/* eslint-disable no-unused-vars */
import React from "react";
import "./Slidebar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
const Slidebar = () => {
  return (
    <div className="sidebar">
      <div className="sildebar-options">
        <NavLink to="/admin" className="sidebar-option" end>
          <img src={assets.profile_icon} alt="" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/admin/addcake" className="sidebar-option">
          <img src={assets.add_icon_green} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/admin/cakelist" className="sidebar-option">
          <img src={assets.bag_icon} alt="" />
          <p>List Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Slidebar;
