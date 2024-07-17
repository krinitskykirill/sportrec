import React from "react";

interface BurgerProps {
  isOpen: boolean;
  handleOpen: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ isOpen, handleOpen }) => {
  return (
    <div
      className={`header__burger ${isOpen ? "active" : ""}`}
      onClick={handleOpen}
    ></div>
  );
};
