import React from "react";

/**
 * Services component
 * This component is used to create a service page
 * @returns 
 */
const Services = () => {
  return (
    <div style={styless.home_container}>
      <div style={styless.hero_text}>
        <h1 style={styless.title}>Services</h1>
        <p style={styless.description}>
          Below are the services provided by this application
        </p>
        <ul style={styless.services}>
          <li>
            <strong>Voice Based Website Navigation:</strong> Users can Navigate through the website using voice based commands.
          </li>
          <li>
            <strong>Efficient Speec Recognition:</strong> Efficient integration of voice based speec recognition.
          </li>
          <li>
            <strong>Voice Based communitation between the system and the user:</strong> If the command is not recognized, the user is able to
            recive information regarding that from the application through voice.
          </li>
          <li>
            <strong>Choice for choosing Voice based Navigation:</strong> The user has complete comtrol over wether to use voice based navigation or not.
          </li>
        </ul>
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
    backgroundImage: "linear-gradient(to bottom right, #008080, #4b0082)",
    fontFamily: " 'Roboto', sans-serif",
  },
  hero_text: {
    textAlign: "center",
    maxWidth: "600px",
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
  },
  services: {
    fontSize: "1.3rem",
    lineHeight: "2",
    color: "#808080",
    paddingLeft: "20px",
    listStyleType: "disc",
  },
};


export default Services;