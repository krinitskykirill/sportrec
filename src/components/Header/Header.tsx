import React from "react";
import "./Header.scss";
import { Select } from "../shared/Select/Select.tsx";
import ru from "@assets/img/ru.svg";
import en from "@assets/img/en.svg";
import fr from "@assets/img/fr.svg";
import profile from "@assets/img/profile.svg";
import { Navigation } from "./Navigation.tsx";
import { NavLink } from "react-router-dom";
import logo from "@assets/img/logo.svg";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <NavLink to="/feed" className="header__nav-link">
            <img src={logo} alt="Sportec" width="110" height="16" />
          </NavLink>
          <Navigation />
          <div className="header__burger"></div>
          <div className="header__buttons">
            <Select
              options={[
                { value: "RU", icon: <img src={ru} alt="" /> },
                { value: "EN", icon: <img src={en} alt="" /> },
                { value: "FR", icon: <img src={fr} alt="" /> },
              ]}
            />
            <button className="header__login">
              <img src={profile} width={40} height={40} alt="Войти" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
