import React from "react";
import { useAuth } from "../../contexts/auth";

// import { Container } from './styles';

const Login: React.FC = () => {
  const { signed, Login } = useAuth();

  console.log(signed);

  async function handleLogin(event: any) {
    event.preventDefault();
    await Login({
      email: "admin@gmail.com",
      password: "123456",
    });
  }

  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-field">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail"
            required
          />
          <div className="underline"></div>
        </div>
        <div className="input-field">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
