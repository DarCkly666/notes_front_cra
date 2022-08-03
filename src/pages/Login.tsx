import React, { FC, ReactElement } from "react";
import Styles from "../styles/Form.module.css";

const Login: FC = (): ReactElement => {
  return (
    <div className={`${Styles.form_container} theme-dark-bg`}>
      <form className={`${Styles.form} theme-dark-bg`}>
        <h3 className={Styles.form_title}>Login</h3>
        <input
          className={`${Styles.form_input} theme-dark-text`}
          id="inputEmail"
          type="email"
          placeholder="Email"
        />
        <input
          className={`${Styles.form_input} theme-dark-text`}
          id="inputPassword"
          type="password"
          placeholder="Password"
        />
        <p className={`${Styles.form_already} theme-dark-text`}>
          dont have an account?{" "}
          <span className={`${Styles.form_login} theme-dark-text`}>
            create here.
          </span>
        </p>
        <button className={Styles.form_submit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export { Login };
