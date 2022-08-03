import React, { FC, ReactElement, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Styles from "../styles/Navbar.module.css";

const Navbar = ({ username }: { username: string }): ReactElement => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onThemeChange = () => {
    if (setTheme !== undefined) {
      setTheme(theme === "ligth" ? "dark" : "ligth");
    }
  };

  return (
    <nav className={Styles.nav}>
      <h3>{username}</h3>
      <ul className={Styles.navigation}>
        <i
          className={`${Styles.navigation_item} fa-solid fa-circle-half-stroke`}
          onClick={onThemeChange}
        ></i>
        <li className={Styles.navigation_item}>
          <p>Log out</p>
          <span></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
