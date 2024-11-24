import React from "react";

/**
 * About component
 * This component is used to create a About page
 * @returns 
 */
const About = () => {
  return (
    <div style={styless.home_container}>
      <div style={styless.hero_text}>
        <h1 style={styless.title}>About</h1>
        <p style={styless.description}>
          This is a website where, the users can navigate throughout the application by speech. 
          The user can click the Start Voice Navigation to make the web application take input voice commands.
          The user then can give voice commands in natural english language, to redicrect to the page they want to navigate to.
          The application processes the commands and analyzes which page to go to. If the application is unable to analyze which page to go to,
          then it will give a voice based output to the user, that " it was not able to process the input command, please try again". 
          If it is able to analyze, which page it has to go to, then it will redirect to that page. If the user wants to turn of voice Navigation,
          it can simply be done by clicking the "Stop Voice Navigation" button.
          </p>
      </div>
    </div>
  );
};

// Inline styles for the Navbar component
const styless = {
  home_container : {
    display: "flex",
    justifyContent: "center",
    alignItems: "top",
    height: "100vh",
    color: "black",
    backgroundImage: "linear-gradient(to bottom right, #4b0082, #2a0050)",
    fontFamily: " 'Roboto', sans-serif",
  },
  hero_text: {
    textAlign: "left",
    maxWidth: "10000px",
    maxHeight: "300px",
    padding: "20px",
    borderRadius: "10px",
  },
  title: {
    fontSize: "4rem",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  },
  description: {
    fontSize: "2rem",
    lineHeight: "1.6",
    marginBotton: "30px",
    color: "white"
  },
};


export default About;