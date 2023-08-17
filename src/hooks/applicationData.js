import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function useApplicationData() {

  const [state, setState] = useState({
    newTeammate: false,
    teammateSelectedID: null,
    teammates: [],
    conversationSelectedID: null,
    conversations: [],
  });


  useEffect(() => {

    Promise.all([
      axios.get('/api/load')
    ])
    .then((res) => {
      setState({
        ...state,
        teammates: res[0].data[0],
        conversations: res[0].data[1]
      })
    })
  }, [])


  const setTeammate = (teammateID) => {

    console.log(teammateID)

    // Check whether there is a conversation already for this teammate, create one if there is not
    for (let i = 0; i < state.conversations.length; i++) {

      if (state.conversations[i].teammateID === teammateID) {

        setState({
          ...state,
          teammateSelectedID: teammateID,
          conversationSelectedID: state.conversations[i].id,
        });
      }
    }
  };

  const newConversation = (teammateID) => {

    Promise.all([
      axios.post('/api/conversations/new', {teammateID})
    ])
      .then((res) => {        
        // Copy state and add new items
        const conversation = res[0].data
        const stateCopy = {
          ...state,
          teammateSelectedID: teammateID,
          conversationSelectedID: conversation.id,
          newTeammate: false,
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
        const teammate = res[0].data;

                const stateCopy = {
          ...state,
          teammateSelectedID: teammate.id,
          newTeammate: false,
        };  

        stateCopy.teammates.push(teammate);

        setState(stateCopy);

        // Create a newConversation using the teammate
        newConversation(teammate.id);

      })
      .catch(err => { 
        console.log(err);
      });
  };

  const newMessage = (input, conversationID) => {

    // Add message to conversation
    const message = {
      conversationID,
      message: input,
      from: 'You'
    }

    const stateCopy = {...state}

    let conversation

    stateCopy.conversations.forEach(c => {
      if (c.id === conversationID) {
        return conversation = c
      }
    })

    conversation.messages.push(message)

    setState(stateCopy)

    // Post message to API to retrieve response from OpenAI
    axios.post("/api/messages/new-message-text", message)
      .then(res => {

        const stateCopyOutput = {...state}
        let conversation

        stateCopyOutput.conversations.forEach(c => {
          if (c.id === conversationID) {
            return conversation = c
          }
        })
        const messageResponse = res.data;
        conversation.messages.push(messageResponse)

        return stateCopyOutput
      })
      .then(stateCopyOutput => {
        setState(stateCopyOutput)
      })


  }

  return {
    state,
    setState,
    setTeammate,
    newMessage,
    newTeammate,
    // newMessageAudio,
  };

}