import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useCallback, useState } from 'react';


/**
 * Custom hook created for voice navigation using the SpeechRecognition API(which uses AI model to convert Speech to Text)
 * It listenes to user speech and analyzes to page it needs to navigate to
 * @returns useVoiceNavigation
 */
const useVoiceNavigation = () => {
    const navigate = useNavigate(); // React Routrer's navigate function for route changes
    const [isListening, setIsListening] = useState(false); //parameters for activating or deactivating speech recognition 
    const speechRecognitionRefference = useRef(null); //used to refer a speech Recognition instance

    /**
     * Callback used to recognize speech input and process it
     * It initializes SpeechRecognition and handles user speech inputs and errors
     */
    const listenToSpeech = useCallback(() => {

        // checking if the browser supports SpeechRecognition API
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition){
            console.error('Speech Recognition not initialized. This Api is not suppurted by this browser')
            return 
          }

        // Initializing Speech Recognition instance 
        const speechRecognition = new SpeechRecognition();
        speechRecognitionRefference.current = speechRecognition;
        speechRecognition.lang = 'en-US';
        speechRecognition.interimResults = false;
        speechRecognition.continuous = true;

        // logic to handle the results of speechRecognition instance when an event happens
        speechRecognition.onresult = (event) => {
            let flag = 0
            const outputTextData = event.results[event.results.length - 1][0].transcript;
            console.log('outputTextData: ', outputTextData);
    
            //Map voice commands to routes
            const routeMapping = {
                home: '/',
                about: '/about',
                services: '/service',
                contact: '/contact',
                started: '/service'
            };
    
            // logic to map the input to navigating to appropriate page
            for (const [page_keyword, route] of Object.entries(routeMapping)){
                if (outputTextData.toLowerCase().includes(page_keyword)) {
                    navigate(route);
                    flag = 1
                    break;
                }
            }
            // If no appropriate command match is formed, provide voice based feedback to user to try again with the command
            if(flag === 0){
                console.log('Unable to process the input command. Please try again');
                speechRecognition.stop();
                const outputMessage = 'Unable to process the input command. Please try again'
                const outputSpeech = new SpeechSynthesisUtterance(outputMessage);
                outputSpeech.lang = 'en-US';

                // restart speech Recognition instance after the voice feedback is provided
                outputSpeech.onend = () => {
                    try {
                        speechRecognition.start();
                    } catch (e) {
                        console.error("Unable to start Speech Recognition. Reason : ",e)
                    }
                };

                // stop any ongoing speech and output the feedback
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(outputSpeech);
            }
          };

        // Handle the start event
        speechRecognition.onstart = () => {
            console.log('Speech Recognition has Started');
            setIsListening(true);
        };

        // Handle errors
        speechRecognition.onerror = (event) => {
            console.error('Error in Speech Recognition:', event.error);
        };

        //Handle restarting of the speechRecognition  if it ends
        speechRecognition.onend = () => {
            if(isListening){
                console.log('Speech recognition ended, restarting...');
                speechRecognition.start();
            }
        };

        // start speeech recognition
        try {
            speechRecognition.start();
        } catch(e){
            console.error("Unable to start Speech Recognition. Reason : ",e)
        }
    },[navigate]);

    /**
     * callback to stop speeech recognition
     */
    const stopListening = useCallback(() => {
        if (speechRecognitionRefference.current) {
            speechRecognitionRefference.current.stop();
            speechRecognitionRefference.current = null;
            console.log("Stopping Speec Recognition Navigation")
            setIsListening(false);
        }
        setIsListening(false);
    }, []);

    useEffect(() => {
        return () => {
            if (speechRecognitionRefference.current) {
                speechRecognitionRefference.current.stop();
                speechRecognitionRefference.current = null;
            }
        };
    }, []);

    // Return the start and stop functions for speech recognition
    return {listenToSpeech, stopListening};
};

export default useVoiceNavigation
