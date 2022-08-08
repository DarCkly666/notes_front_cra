import React, { FC, ReactElement, useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const NothingFound: FC = (): ReactElement => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className="container">
      <h2 className={`${theme === "dark" && "text-light"} text-center`}>
        Nothing found
      </h2>
    </div>
  );
};

export default NothingFound;
