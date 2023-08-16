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
        console.log(res)
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

    console.log('this is state', state)

    Promise.all([
      axios.post('/api/teammates/new', teammate)
    ])
      .then((res) => {
        console.log(res)
        const teammateID = res[0].data;
        newConversation(teammateID);
      })
      .catch(err => { 
        console.log(err);
      });
  };

  const newMessage = (input, conversationID) => {

    const message = {
      conversationID,
      input
    }

    axios.post("/api/messages/new-message-text", message)
      .then(res => {
        
        
      })
      .catch(error => {
        console.error(error);
      });
  }

  // const newMessageAudio = (formData, conversationID) => {

  //   // Retrieve conversation
  //   let conversationObject = {};

  //   state.conversations.forEach((convo) => {

  //     if (convo.conversationID === conversationID) {
  //       conversationObject = convo;
  //     }
  //   });

  //   // Create message input object
  //   const messageInput = {
  //     teammate: 'You',
  //     input: 'Recording Sent'
  //   };

  //   // Add message to conversationObject
  //   conversationObject.messages.push(messageInput);


  //   formData.append('conversationID', conversationID);

  //   axios.post('api/messages/new-message-audio', formData)
  //     .then(response => {
  //       const messageResponse =
  //       {
  //         // teammate: state.teammates[state.teammateSelectedID].name,
  //         text: response.data
  //       };
  //       const stateCopy = { ...state };
  //       conversationObject.messages.push(messageResponse);
  //       setState(stateCopy);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  return {
    state,
    setState,
    setTeammate,
    newMessage,
    newTeammate,
    // newMessageAudio,
  };

}