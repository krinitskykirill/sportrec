import React from "react";
import { NavLink } from "react-router-dom";
import home from "@assets/img/home.svg";
import homeActive from "@assets/img/homeActive.svg";
import marketplace from "@assets/img/marketplace.svg";
import marketplaceActive from "@assets/img/marketplaceActive.svg";
import rating from "@assets/img/rating.svg";
import ratingActive from "@assets/img/ratingActive.svg";
import competitions from "@assets/img/competitions.svg";
import competitionsActive from "@assets/img/competitionsActive.svg";
import live from "@assets/img/live.svg";
import liveActive from "@assets/img/liveActive.svg";
import organizations from "@assets/img/organizations.svg";
import organizationsActive from "@assets/img/organizationsActive.svg";

interface NavProps {}

export const Navigation: React.FC<NavProps> = () => {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/feed" className="header__nav-link">
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? homeActive : home}
                    alt=""
                    className="header__nav-icon"
                  />
                  <span className="header__nav-title">Лента</span>
                </>
              )}
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/marketplace" className="header__nav-link">
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? marketplaceActive : marketplace}
                    alt=""
                    className="header__nav-icon"
                  />
                  <span className="header__nav-title">Маркетплейс</span>
                </>
              )}
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/rating" className="header__nav-link">
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? ratingActive : rating}
                    alt=""
                    className="header__nav-icon"
                  />
                  <span className="header__nav-title">Рейтинги</span>
                </>
              )}
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/competitions" className="header__nav-link">
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? competitionsActive : competitions}
                    alt=""
                    className="header__nav-icon"
                  />
                  <span className="header__nav-title">Соревнования</span>
                </>
              )}
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/organizations" className="header__nav-link">
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? organizationsActive : organizations}
                    alt=""
                    className="header__nav-icon"
                  />
                  <span className="header__nav-title">Организации</span>
                </>
              )}
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/live" className="header__nav-link">
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? liveActive : live}
                    alt=""
                    className="header__nav-icon"
                  />
                  <span className="header__nav-title">Live</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
