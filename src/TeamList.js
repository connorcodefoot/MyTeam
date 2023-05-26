import React from "react";
import ATeamMate from "./ATeamMate";

function TeamList (props) {
  
  let teamList = props.teammates.all.map((teammate) => {
    return (
    <div>
    <ATeamMate name={teammate}/>
    </div>
    )
  })
  return <div>{teamList}</div>
}

export default TeamList