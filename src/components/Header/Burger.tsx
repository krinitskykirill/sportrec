import React from "react";

interface BurgerProps {
  open: boolean;
  handleOpen: () => void;
}

export const Burger: React.FC<BurgerProps> = ({ open, handleOpen }) => {
  return (
    <div
      className={`header__burger ${open ? "active" : ""}`}
      onClick={handleOpen}
    ></div>
  );
};
