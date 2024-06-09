import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const { signIn } = UserContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input
          onSubmit={handleSubmit}
          className="btn-submit"
          type="submit"
          value="Login"
        />
      </form>
      <p>
        New to ema john? <Link to="/signup">Create a new account</Link>
      </p>
    </div>
  );
};

export default Login;
