import React from "react";
import logo from "@assets/img/logo.svg";
import { NavLink } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <NavLink to="/feed" className="header__nav-link header__logo">
      <img src={logo} alt="Sportec" width="110" height="16" />
    </NavLink>
  );
};
