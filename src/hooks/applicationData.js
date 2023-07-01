import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function useApplicationData() {

  // Set initial state
  const [state, setState] = useState({
    newTeammate: false,
    teammateSelectedID: null,
    teammates: [],
    conversationSelectedID: null,
    conversations: [],
  });

  // Get teammates from API, including trigger for rerunning
  const [triggerEffect, setTriggerEffect] = useState(false);

  useEffect(() => {

    console.log('Use Effect Runs');

    Promise.all([
      axios.get('/api/teammates'),
    ])
      .then((res) => {
        setState({
          ...state,
          teammates: res[0].data
        });
      });
  }, [triggerEffect]);


  const setTeammate = (teammateID) => {

    console.log(state);

    // Check whether there is a conversation already for this teammate, create one if there is not
    for (let i = 0; i < state.conversations.length; i++) {

      if (state.conversations[i].teammateID === teammateID) {

        setState({
          ...state,
          teammateSelectedID: teammateID,
          conversationSelectedID: state.conversations[i].conversationID,
        });
      }
    }
  };

  const newConversation = (teammateID) => {

    Promise.all([
      axios.post('/api/conversations/new', { data: teammateID })
    ])
      .then((res) => {

        // Refresh teammate list to show new teammate
        setTriggerEffect(triggerEffect === true ? false : true);

        // Copy state and add new items
        const stateCopy = {
          ...state,
          teammateSelectedID: teammateID,
          conversationSelectedID: res[0].data,
          newTeammate: false,
        };

        // Create new conversation object
        const conversation = {
          conversationID: res[0].data,
          teammateID,
          messages: []
        };

        stateCopy.conversations.push(conversation);

        setState(stateCopy);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const newTeammate = (teammate) => {

    Promise.all([
      axios.post('/api/teammates/new', teammate)
    ])
      .then((res) => {
        const teammateID = res[0].data;
        newConversation(teammateID);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const newMessage = (input, conversationID) => {

    // Retrieve conversation
    let conversationObject = {};

    state.conversations.forEach((convo) => {

      if (convo.conversationID === conversationID) {
        conversationObject = convo;
      }
    });

    // Create message input object
    const messageInput = {
      teammate: 'You',
      message: input
    };

    // Add message to conversationObject
    conversationObject.messages.push(messageInput);


    // Package data for post to API
    const data = {
      conversationID,
      input
    };

    axios.post("/api/messages/new-message-text", data)
      .then(response => {
        const messageResponse =
        {
          teammate: state.teammates[state.teammateSelectedID].name,
          message: response.data
        };
        const stateCopy = { ...state };
        conversationObject.messages.push(messageResponse);
        setState(stateCopy);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const newMessageAudio = (formData, conversationID) => {

    // Retrieve conversation
    let conversationObject = {};

    state.conversations.forEach((convo) => {

      if (convo.conversationID === conversationID) {
        conversationObject = convo;
      }
    });

    // Create message input object
    const messageInput = {
      teammate: 'You',
      input: 'Recording Sent'
    };

    // Add message to conversationObject
    conversationObject.messages.push(messageInput);


    formData.append('conversationID', conversationID);

    axios.post('api/messages/new-message-audio', formData)
      .then(response => {
        const messageResponse =
        {
          // teammate: state.teammates[state.teammateSelectedID].name,
          text: response.data
        };
        const stateCopy = { ...state };
        conversationObject.messages.push(messageResponse);
        setState(stateCopy);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return {
    state,
    setState,
    setTeammate,
    newMessage,
    newTeammate,
    newMessageAudio
  };

}