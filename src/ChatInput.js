import React from "react";
import { useState, useRef } from "react";
import {FaPaperPlane, FaMicrophone} from 'react-icons/fa';





function ChatInput(props) {

  // State and ref
  const [textInput, setTextInput] = useState('');
  const [audioInput, setAudioInput] = useState(false);
  const [audio, setAudio] = useState(false)
  const [audioUrl, setAudioUrl] = useState('');
  const [audioStatus, setAudioStatus] = useState('Create new recording');
  const mediaRecorderRef = useRef(null);
  const audioRef = useRef(null);


  const handleFormSubmit = (event) => {
    event.preventDefault();

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Optionally, use smooth scrolling
    });

    if (textInput) {
      props.onSubmit(textInput, props.conversationSelectedID)
      }

    if (audioInput) {

      const formData = new FormData();
      formData.append('audio', audioInput);

      props.onSubmitAudio(formData, props.conversationSelectedID)
      }
    
    setTextInput('');
    setAudioStatus(null);
    setAudioInput(null);
    setAudioUrl('');

    // // Reset audio playback
    // if (audioRef.current) {
    //   audioRef.current.pause();
    //   audioRef.current.currentTime = 0;
    // }

  };

  // const handleStartRecording = () => {

  //   setAudioStatus('Recording');

  //   navigator.mediaDevices.getUserMedia({ audio: true })
  //     .then((stream) => {
  //       const mediaRecorder = new MediaRecorder(stream);
  //       mediaRecorderRef.current = mediaRecorder;
  //       mediaRecorder.start();

  //       const chunks = [];
  //       mediaRecorder.addEventListener('dataavailable', (e) => {
  //         chunks.push(e.data);
  //       });

  //       mediaRecorder.addEventListener('stop', () => {
  //         const recordingBlob = new Blob(chunks, { type: 'audio/webm' });
  //         const audioURL = URL.createObjectURL(recordingBlob);
  //         setAudioInput(recordingBlob);
  //         setAudioUrl(audioURL);
  //       });
  //       setAudio(true)
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing microphone:', error);
  //     });
  // };

  // const handleStopRecording = () => {
  //   if (mediaRecorderRef.current) {
  //     mediaRecorderRef.current.stop();
  //   }
  //   setAudioStatus('Done');
  //   setAudio(false)
  // };


  return (
    <>
    <div className="new-message-form">
    <form id='messageInput' onSubmit={handleFormSubmit} encType="multipart/form-data">
      <div>
        <textarea
          rows="2"
          type="text"
          id="textInput"
          placeholder="Send a message"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>

      {/* <div> */}
      {/* <div>
          {audioStatus}
        </div>
        <button type="button" onClick={handleStartRecording}>
          Start Recording
        </button>
        <button type="button" onClick={handleStopRecording}>
          Stop Recording
        </button>
      </div>
        <div>
          <audio ref={audioRef} src={audioUrl} controls />
        </div>
      <div> */}
        <button type="submit"><FaPaperPlane className="icon" /></button>
        <button type="Record Audio"><FaMicrophone className="icon" /></button>
    </form>
    </div>
    </>
  );
}
export default ChatInput;