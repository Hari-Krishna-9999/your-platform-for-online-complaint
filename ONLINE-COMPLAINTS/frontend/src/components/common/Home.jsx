import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterC from '../common/FooterC';
import heroImage from '../../images/Image1.png'; 

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-wrapper">
      <header className="header">
        <div className="brand">COMPLAINTCARE</div>
        <nav>
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </nav>
      </header>
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-image">
            <img src={heroImage} alt="Complaint Management" />
          </div>
          <div className="hero-text">
            <h1>Empower Your Team</h1>
            <p>Streamline complaints and exceed customer expectations.</p>
            <div className="hero-buttons">
              <button onClick={() => handleNavigation('/login')} className="btn-login">Register Complaint</button>
              <button onClick={() => handleNavigation('/signup')} className="btn-login">Get Started</button>
            </div>
          </div>
        </div>
      </main>
      <FooterC />
      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #0f0f0f;
          color: #f9f9f9;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #1a1a1a;
          padding: 15px 30px;
        }

        .brand {
          font-size: 1.5rem;
          font-weight: bold;
          color: #FFD700;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 25px;
          padding: 0;
          margin: 0;
        }

        nav ul li a {
          text-decoration: none;
          color: #f0f0f0;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        nav ul li a:hover,
        nav ul li a.active {
          color: #FFD700;
        }

        .hero-section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          background: #0f0f0f;
          min-height: 65vh;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          max-width: 1200px;
          width: 100%;
        }

        .hero-image img {
          width: 100%;
          max-width: 500px;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
        }

        .hero-text {
          text-align: left;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #FFD700;
        }

        .hero-text p {
          font-size: 1.1rem;
          margin-bottom: 30px;
          color: #ccc;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .btn-login {
          background: #FFD700;
          color: #111;
          padding: 12px 24px;
          font-weight: bold;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s ease;
        }

        .btn-login:hover {
          background: #e6be00;
        }

        footer {
          text-align: center;
          padding: 20px;
          background-color: #111;
          color: #aaa;
          font-size: 0.9rem;
        }

        @media (max-width: 758px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-text {
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
export default Home;
