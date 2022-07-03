import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavbarAdmin from "./_components/Navbar";

export default function Admin() {
  if (!localStorage.getItem("UserAdmin")) {
    return <Navigate replace to="/auth" />;
  }

  return (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  );
}
