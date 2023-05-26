import React from 'react';
import { useState } from 'react';
import ATeamMate from './ATeamMate';
import './App.css';
import ChatInput from './ChatInput';
import axios from 'axios';
import ChatThread from './ChatThread';

function App() {

  const [messages, setMessages] = useState([]);

  function sendInputToAPI (input) {
  
    setMessages((messages) => [...messages,
      {
        id: messages.length + 1,
        user: 'You',
        text: input
      }]
    )
  
    axios.post("/api/new-input", {
      data: input
    })
    .then(response => {
      setMessages((messages) => [...messages,
        {
          id: messages.length + 1,
          user: 'Johnny Boy',
          text: response.data
        }]
        )
        console.log(messages)
      })
    .catch(error => {
      console.error(error);
    });
    console.log(messages)
  }

  return (
    <div className="chat-app">
      <div className="chat-app__sidebar">
        <ul className="chat-app__list">
          <li className="chat-app__list-item">< ATeamMate /></li>
          <li className="chat-app__list-item">User 2</li>
          <li className="chat-app__list-item">User 3</li>
          <li className="chat-app__list-item">User 4</li>
        </ul>
      </div>
      <div className="chat-app__chat-section">
        <div className="chat-app__chat-header">Chat Header</div>
        <div className="chat-app__chat-content">
          < ChatThread 
          messages = {messages} 
          />
        </div>
        <div className="chat-input">
          < ChatInput
          onSave = {sendInputToAPI}
          />
        </div>
      </div>
    </div>
  );
}

export default App;