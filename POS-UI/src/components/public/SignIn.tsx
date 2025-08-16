import React, { useContext, useState, type ChangeEvent } from "react";
import { AuthContext } from "../../assets/memory/auth";
import { useNavigate } from "react-router-dom";
//import './App.css'

function SignIn() {

  const navigate = useNavigate();

  const context = useContext(AuthContext)
  if(!context){
    throw new Error("Authenticate debe usarse dentro de un AuthProvider");
  }
  const [auth, sendAuth] = context;

  const enviar = async (form:Object) => {
    sendAuth({type: 'put', token: '12345'});
    navigate('/pos');
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  
  const {email, password} = form;

  const onChange = (event: ChangeEvent, prop: string) => {
    const value = (event.target as HTMLInputElement).value;
    setForm((estado) => ({ ...estado, [prop]: value}));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    enviar(form);
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
              onChange={(e) => onChange(e, "email")}
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
              onChange={(e) => onChange(e, "password")}
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
