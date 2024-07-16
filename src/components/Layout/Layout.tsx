import React from "react";
import { Header } from "../Header/Header.tsx";
import { Outlet } from "react-router-dom";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Outlet />
      </main>
    </>
  );
};
