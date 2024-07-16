import React from "react";
import "./Header.scss";
import { Select } from "../shared/Select/Select.tsx";
import ru from "@assets/img/ru.svg";
import en from "@assets/img/en.svg";
import fr from "@assets/img/fr.svg";
import profile from "@assets/img/profile.svg";
import { Nav } from "./Nav.tsx";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <Nav />
          <div className="header__buttons">
            <Select
              options={[
                { value: "RU", icon: <img src={ru} alt="" /> },
                { value: "EN", icon: <img src={en} alt="" /> },
                { value: "FR", icon: <img src={fr} alt="" /> },
              ]}
            />
            <button className="header__login">
              <img src={profile} alt="Войти" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
