import { useEffect } from "react";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function useApplicationData () {

  const setTeammate = (id) => {
    setState({...teammates, selected: id})}

  const [teammates, setState] = useState({
    selected: 0,
    all: []
  })

    // Get intial data from API
    useEffect(() => {

      Promise.all([
        axios.get('/api/teammates')
      ])
        .then((res) => {
          setState({
            selected: res[0].data[0],
            all: res[0].data
          });
        });
    }, []);

  return {
    teammates,
    setTeammate
  }

}