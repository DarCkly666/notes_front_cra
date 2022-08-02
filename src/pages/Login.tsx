import React, { FC, ReactElement } from "react";

const Login: FC = (): ReactElement => {
  return (
    <div>
      <form>
        <h3>Login</h3>
        <label htmlFor="inputEmail">Email</label>
        <input id="inputEmail" type="email" placeholder="Email" />
        <label htmlFor="inputPassword">Password</label>
        <input id="inputPassword" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { Login };
