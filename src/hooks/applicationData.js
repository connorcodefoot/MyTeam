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
    conversations: []
  });

  // Get teammates from API, including trigger for rerunning
  const [triggerEffect, setTriggerEffect] = useState(false);

  useEffect(() => {

    console.log('Use Effect Runs')

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

    Promise.all([
      axios.post('/api/conversations/new', { data: teammateID })
    ])
      .then((res) => {

        setTriggerEffect(triggerEffect === true ? false : true)

        setState({
          ...state,
          teammateSelectedID: teammateID,
          conversationSelectedID: res[0].data,
          newTeammate: false, 
        });
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
        const teammateID = res[0].data
        setTeammate(teammateID)
      })
      .catch(err => {
        console.log(err);
      });
  };

  const newMessage = (input, conversationID) => {

    // New conversation object
    const conversation = {
      conversationID: state.conversationSelectedID,
      messages: []
    };

    const messageInput = {
      teammate: 'You',
      text: input
    };

    const data = {
      conversationID,
      input
    };

    axios.post("/api/inputs/new-input", data)
    .then(response => {
      const messageResponse =
      {
        // teammate: state.teammates[state.teammateSelectedID].name,
        text: response.data
      };
      conversation.messages.push(messageInput, messageResponse)
      const stateCopy = { ...state };
      stateCopy.conversations.push(conversation)
      setState(stateCopy)
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
    newTeammate
  };

}