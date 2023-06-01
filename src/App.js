// Imports
import React from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

// Hooks
import useApplicationData from './hooks/applicationData';

// Components
import TeamList from './TeamList';
import ChatThread from './ChatThread';


function App() {

  // Create and set state to data from BE
  const { teammates, setTeammate } = useApplicationData()

  const [messages, setMessages] = useState([])


  function sendInputToAPI (input) {
  
    setMessages((messages) => [...messages,
      {
        id: messages.length + 1,
        user: 'You',
        text: input
      }]
    )
  
    axios.post("/api/inputs/new-input", {
      data: input
    })
    .then(response => {
      setMessages((messages) => [...messages,
        {
          id: messages.length + 1,
          user: teammates.all[teammates.selected].name,
          text: response.data
        }]
        )
      })
    .catch(error => {
      console.error(error);
    });
  }
  
  return (
    <div className="chat-app">
      <div className="chat-app__sidebar">
        <div className="chat-app__list">
          <TeamList teammates={teammates} onChange={setTeammate} />
        </div>
      </div>
      <div className="chat-app__chat-section">
        <div className="chat-app__chat-content">
          < ChatThread 
          messages = {messages} 
          onSave = {sendInputToAPI}
          />
        </div>
      </div>
    </div>
  );
}

export default App;