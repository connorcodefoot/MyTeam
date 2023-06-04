import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function useApplicationData () {

 const [state, setState] = useState({
  teammateSelectedID: null,
  teammates: [],
  conversationID: null,
 })

  const setTeammate = (id) => { 
    setState({...state, teammateSelectedID: id })
    setConversation(id)
  }

  const setConversation = (id) => {

    Promise.all([
      axios.post('/api/conversations/new', { data: id})
    ])
      .then((res) => {
        const conversationID = res[0].data
        console.log(conversationID)
        return conversationID
      })
      .then((conversationID) =>
        setState({...state, conversationID}))
  }

    // Get intial data from API
    useEffect(() => {

      Promise.all([
        axios.get('/api/teammates'),
      ])
        .then((res) => {
          setState({
            teammateSelectedID: res[0].data[0],
            teammates: res[0].data
          });
        });
    }, []);

  return {
    state,
    setState,
    setConversation,
    setTeammate,
  }

}