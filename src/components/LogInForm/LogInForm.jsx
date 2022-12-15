import { useState } from "react";
import { redirect } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import "./LogInForm.css";

export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.logIn(credentials);
      setUser(user);
      return redirect("/");
    } catch (error) {
      setError("Log In Failed - Try Again");
      console.log(error);
    }
  }

  return (
    <div className="form-page">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="credentials-container">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="credentials-container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">LOG IN</button>
        </form>
        <p className="error-message">{error}</p>
      </div>
    </div>
  );
}
