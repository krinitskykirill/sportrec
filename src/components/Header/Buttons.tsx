import React from "react";
import profile from "@assets/img/profile.svg";
import { LanguageSelect } from "./LanguageSelect.tsx";

export const Buttons: React.FC = () => {
  return (
    <div className="header__buttons">
      <LanguageSelect />
      <button className="header__login">
        <img src={profile} width={40} height={40} alt="Войти" />
      </button>
    </div>
  );
};
