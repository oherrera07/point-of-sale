import React, { useState } from "react";
//import './App.css'

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="main-container">
      <div className="card-login">
        <h2 className="">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label className="login-label">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              required
            />
          </div>

          <div>
            <label className="login-label">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
          </div>

          <button
            type="submit"
            className="sign-in-button"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-gray-800 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignIn
