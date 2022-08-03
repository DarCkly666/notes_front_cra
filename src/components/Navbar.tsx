import React, { FC, ReactElement } from "react";
import Styles from "../styles/Navbar.module.css";

const Navbar = ({ username }: { username: string }): ReactElement => {
  return (
    <nav className={Styles.nav}>
      <h3>{username}</h3>
      <ul className={Styles.navigation}>
        <li className={Styles.navigation_item}>
          <p>Log out</p>
          <span></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
