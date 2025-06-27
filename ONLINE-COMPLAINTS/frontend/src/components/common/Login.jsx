import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterC from './FooterC';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false); // Step 4: loading state
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data)); // Store user
        const userType = data.userType;

        if (userType === "Admin") {
          navigate("/admin");
        } else if (userType === "Agent") {
          navigate("/agent");
        } else if (userType === "Ordinary") {
          navigate("/user");
        } else {
          setErrorMsg("Unknown user role.");
        }
      } else {
        setErrorMsg(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Error during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      <header className="header">
        <div className="brand">COMPLAINTCARE</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login" className="active">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </nav>
      </header>

      <div className="login-container">
        <div className="login-card">
          <h2>Welcome Back!</h2>
          <p>Please login to continue</p>

          {errorMsg && <p style={{ color: 'red', marginBottom: '10px' }}>{errorMsg}</p>}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button className="btn-login" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="form-footer">
              <p>Don't have an account? <a href="/signup">Sign up</a></p>
              <a href="#" className="forgot">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>

      <FooterC />
    </>
  );
}

export default Login;
