import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const { register, error } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",    // Add email field
    phone: "",    // Add phone field
    city: "",     // Add city field
    country: "",  // Add country field
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(credentials);
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <input
          type="email"    // Add email input field
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="text"     // Add phone input field
          placeholder="Phone"
          id="phone"
          onChange={handleChange}
        />
        <input
          type="text"     // Add city input field
          placeholder="City"
          id="city"
          onChange={handleChange}
        />
        <input
          type="text"     // Add country input field
          placeholder="Country"
          id="country"
          onChange={handleChange}
        />
        <button onClick={handleRegister}>Register</button>
        {error && <p className="error-message">{error.message}</p>}
      </form>
      <p>
        Already have an account? <Link to="/login">Sign in here</Link>
      </p>
    </div>
  );
};

export default Register;
