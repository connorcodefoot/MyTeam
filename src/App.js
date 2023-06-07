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

// Client side application. Controller for state and initial data is imported from useApplicationData hook
const { state, setState, setTeammate, newMessage } = useApplicationData()
  
  return (
    <div className="chat-app">
      <div className="chat-app__sidebar">
        <div className="chat-app__list">
          <TeamList teammates={state.teammates} teammateSelectedID={state.teammateSelectedID} onChange={setTeammate} />
        </div>
      </div>
      <div className="chat-app__chat-section">
        <div className="chat-app__chat-content">
          < ChatThread 
          conversationID = {state.conversationID}
          onSave = {newMessage}
          messages = {state.messages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;