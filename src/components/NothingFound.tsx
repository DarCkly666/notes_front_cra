import React, { FC, ReactElement, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Styles from "../styles/NothingFound.module.css";

const NothingFound: FC = (): ReactElement => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className={`${Styles.container} theme-${theme}-bg`}>
      <h2 className={`${Styles.content} theme-${theme}-text`}>Nothing found</h2>
    </div>
  );
};

export default NothingFound;
