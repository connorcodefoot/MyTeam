import React from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';


// Components
import TeamList from './TeamList';
import ChatThread from './ChatThread';
import ChatInput from './ChatInput';



function App() {

  const [messages, setMessages] = useState([])
  const [teammates, setTeammate] = useState({
    selected: 'Marty',
    all: ['Marty', 'Xiu', 'Jan', 'Tobias']
  })

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
          user: teammates.selected,
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
        <div className="chat-app__list">
          <TeamList teammates={teammates} />
        </div>
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