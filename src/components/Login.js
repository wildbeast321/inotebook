import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Login = (props) => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate=useNavigate();

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleformsubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      localStorage.setItem("token", json.authtoken)
      props.showalert("Logged In Successfully", "success")
      navigate("/")
    }
    else{
      props.showalert("Incorrect Credentials","danger")
    }
  };

  return (
    <form className="container my-4" onSubmit={handleformsubmit}>
      <h2 className="mb-3">Enter Your Login Credentials</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={credentials.password}
          name="password"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
