import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Auth from "../Pages/Auth";
import "./layout.css";
import SideMenu from "./sideMenu/SideMenu";
import TopMenu from "./topMenu/TopMenu";

const Layout = () => {
  const isAuthenticated = false;
  const location = useLocation();
  return (
    <main className="layout">
      {/* SIDE MENU */}
      <SideMenu />
      <div className="layout__contents">
        {/* TOP MENU */}
        <TopMenu />

        {/* CONTENT */}
        <section className="layout__outlet">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Layout;
