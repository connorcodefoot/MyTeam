// Imports
import React from 'react';
import './styles/App.scss';

// Hooks
import useApplicationData from './hooks/applicationData';

// Helpers
import {getMessages} from './helpers/selectors'

// Components
import TeamList from './TeamList';
import ChatThread from './ChatThread';
import NewTeammateButton from './NewTeammateButton';
import NewTeammateForm from './NewTeammateForm';


function App() {

// Client side application. Controller for state and initial data is imported from useApplicationData hook
const { state, setState, setTeammate, newMessage, newMessageAudio, newTeammate } = useApplicationData()


// Retrieve messages for conversation

  return (
    <div className="app-main">
      <div className="sidebar">
        <div className = "new-teammate-section">
          <NewTeammateButton onClick={() => setState({...state, newTeammate: true})}/>
        </div>
        <div className="teammates-list">
          <TeamList teammates={state.teammates} teammateSelectedID={state.teammateSelectedID} onChange={setTeammate} />
        </div>
      </div>
      <div className="primary-container">
      <div className="new-teammate-form">
        {(state.newTeammate) && (
        < NewTeammateForm
        onSave={newTeammate} />
        )}
        </div>
        <div className="chat-thread">
        {(!state.newTeammate) && (
          < ChatThread 
          conversationSelectedID = {state.conversationSelectedID}
          onSubmit = {newMessage}
          onSubmitAudio ={newMessageAudio}
          messages = {getMessages(state, state.conversationSelectedID)}
          />
        )}
        </div>
      </div>
    </div>
  );
}

export default App;