import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function useApplicationData() {

    // Set initial state
  const [state, setState] = useState({
    teammateSelectedID: null,
    teammates: [],
    conversationID: null,
    conversations: [],
    messages: []
  });

    // Get teammates from API
    useEffect(() => {

      Promise.all([
        axios.get('/api/teammates'),
      ])
        .then((res) => {
          setState({
            ...state,
            teammates: res[0].data
          })
        });
    }, []);

  const setTeammate = (id) => {

    Promise.all([
      axios.post('/api/conversations/new', { data: id })
    ])
      .then((res) => {
        setState({ ...state, teammateSelectedID: id, conversationID: res[0].data });
      })
      .catch(err => {
        console.log(err)
      })
  };

  const newMessage = (input, conversationID) => {
  
      const messageInput = {
        id: state.messages.length + 1,
        conversationID,
        user: 'You',
        text: input
      }

    const stateCopy = {...state}
    stateCopy.messages.push(messageInput)

    const data = {
      conversationID,
      input
    }
  
    axios.post("/api/inputs/new-input", data)
    .then(response => {
      const messageResponse = 
        {
          id: state.messages.length + 1,
          conversationID,
          user: state.teammates[state.teammateSelectedID].name,
          text: response.data
        }
      const stateCopy = {...state}
      stateCopy.messages.push(messageResponse)
      })
    .catch(error => {
      console.error(error);
    });
  }

  return {
    state,
    setState,
    setTeammate,
    newMessage
  };

}