import React from "react";
import { useNavigate } from "react-router-dom";


/**
 * Home component
 * This component is used to create a home page
 * @returns 
 */
const Home = () => {

  const navigate = useNavigate();

  const buttonClick = () => {
    navigate("/service");
  };

  return (
    <div style={styles.home_container}>
      <div style={styles.hero_text}>
        <h1 style={styles.title}>Speech Recognized Webiste navigation</h1>
        <p style={styles.description}>This Website displays a simple website which is created, considering the people who can find it difficult to navigate through the website</p>
        <button style={styles.button} onClick={buttonClick}>Get Started</button>
      </div>
    </div>
  );
};

// Inline styles for the Navbar component
const styles = {
  home_container : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "WHITE",
    fontFamily: " 'Roboto', sans-serif",
  },
  hero_text: {
    textAlign: "center",
    maxWidth: "10000px",
    Height: "400px",
    padding: "20px",
    background: "#153749",
    borderRadius: "10px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBotton: "30px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#5c5f30",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    boxShadow: "2px 4px 6px rgba(0,0,0,0.3)",
    transition: "background 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#1e90ff"
  },
};


export default Home;
