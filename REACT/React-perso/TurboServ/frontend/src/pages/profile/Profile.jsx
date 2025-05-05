import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import ProfilForm from "./components/ProfilForm";
import ProfilAvatar from "./components/ProfilAvatar";
export default function Profile() {
  return (
    <div>
      <Outlet></Outlet>
      <div className="lg:flex p-0 m-0">
        <NavBar></NavBar>
        <ProfilAvatar></ProfilAvatar>
        <ProfilForm></ProfilForm>
      </div>
    </div>
  );
}
