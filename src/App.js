// Imports
import React from 'react';
import './App.css';

// Hooks
import useApplicationData from './hooks/applicationData';

// Helpers
import {getMessages} from './helpers/selectors'

// Components
import TeamList from './TeamList';
import ChatThread from './ChatThread';


function App() {

// Client side application. Controller for state and initial data is imported from useApplicationData hook
const { state, setState, setTeammate, newMessage } = useApplicationData()

// Retrieve messages for conversation
const messages = getMessages(state, state.conversationSelectedID)

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
          conversationSelectedID = {state.conversationSelectedID}
          onSave = {newMessage}
          messages = {messages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;