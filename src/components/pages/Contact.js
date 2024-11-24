import React from "react";

/**
 * Contact component
 * This component is used to create a Contact page
 * @returns 
 */
const Contact = () => {
  return (
    <div style={styless.contact_container}>
      <div style={styless.contact_card}>
        <h1 style={styless.title}>Contact Information</h1>
        <p style={styless.details}><strong>Name:</strong>Sachin Palahalli Chandrakumar</p>
        <p style={styless.details}><strong>Email:</strong>chandrakumar.s@northeastern.edu</p>
        <p style={styless.details}><strong>College:</strong>Northeastern University</p>
        <p style={styless.details}><strong>Course:</strong>AI For Human Computer Interaction</p>
      </div>
    </div>
  );
};

// Inline styles for the Navbar component
const styless = {
  contact_container : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "white",
    backgroundImage: "linear-gradient(to bottom right, #1c1c1c, #3b5d40)",
    fontFamily: " 'Roboto', sans-serif",
  },
  contact_card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#333",
    textAlign: "left",
    maxWidh: "400px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    padding: "30px"
  },
  title: {
    fontSize: "2.5rem",
    color: "#3b5d40",
    marginBottom: "20px",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  },
  info: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBotton: "10px",
  },
};


export default Contact;