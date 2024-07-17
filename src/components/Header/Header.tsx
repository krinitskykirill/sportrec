import React, { useState } from "react";
import "./Header.scss";
import { Navigation } from "./Navigation.tsx";
import { LanguageSelect } from "./LanguageSelect.tsx";
import { Buttons } from "./Buttons.tsx";
import { Burger } from "./Burger.tsx";
import { Logo } from "./Logo.tsx";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrapper">
          <div className="header__container">
            <Logo />
            <Navigation isOpen={open} handleOpen={handleOpen} />
            <Burger isOpen={open} handleOpen={handleOpen} />
          </div>
          <LanguageSelect />
          <Buttons />
        </div>
      </div>
    </header>
  );
};
