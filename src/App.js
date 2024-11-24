import './App.css';
import Navbar from './components/Navbar'
import useVoiceNavigation from './useVoiceNavigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  console.log("App is runnning")
  return (
    <Router>
      <div classname="App">
        <VoiceNavigationWrapper />
        <Navbar/>
      </div>
    </Router>
  )
}


const VoiceNavigationWrapper = () => {

  const { listenToSpeech, stopListening } = useVoiceNavigation();
  const [isListening, setIsListening] = useState(false);


  const processListening = () => {
    listenToSpeech();
    setIsListening(true);
  }

  const processStopListening = () => {
    stopListening();
    setIsListening(false);
  }

  return (
    <div style={styles.wrapper}>
      {
        !isListening ? (<button style={styles.startButton} onClick={processListening}>Start Voice Navigation</button>) : (<button style={styles.stopButton} onClick={processStopListening}>Stop Voice Navigation</button>)
      }
      <p style={styles.buttonStatus}>{isListening ? 'Voice Navigator Activate': 'Voice Navigatore Inactive'}</p>
    </div>
  )
};

const styles = {
  wrapper: {
    position: "fixed",
    top: "120px",
    right: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  startButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#34ff06",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },
  stopButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#ff0000",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },
  buttonStatus: {
    marginTop: "10px",
    fontSize: "1rem",
    color: "white",
    textShadow: "2px 4px 6px rgba(0,0,0,0.3)",
  },
};

export default App;