import React, { FC, ReactElement, useState } from "react";
import Styles from "../styles/Register.module.css";

const Register: FC = (): ReactElement => {
  const [formData, setFormData] = useState({});

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    fetch("http://localhost:3003/api/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((response) => console.log("OK: ", response))
      .catch((error) => console.error("NO: ", error));
  };

  return (
    <div className={`${Styles.form_container} theme-dark-bg`}>
      <form className={`${Styles.form} theme-dark-bg`} onSubmit={onSubmitForm}>
        <h3 className={Styles.form_title}>Register</h3>
        <input
          className={`${Styles.form_input} theme-dark-text`}
          id="inputUsername"
          name="username"
          type="text"
          onChange={onInputChange}
          placeholder="Username"
        />
        <input
          className={`${Styles.form_input} theme-dark-text`}
          id="inputEmail"
          name="email"
          type="email"
          onChange={onInputChange}
          placeholder="Email"
        />
        <input
          className={`${Styles.form_input} theme-dark-text`}
          id="inputPassword"
          name="password"
          type="password"
          onChange={onInputChange}
          placeholder="Password"
        />
        <p className={`${Styles.form_already} theme-dark-text`}>
          have already an account?{" "}
          <span className={`${Styles.form_login} theme-dark-text`}>login</span>
        </p>
        <button className={Styles.form_submit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export { Register };
