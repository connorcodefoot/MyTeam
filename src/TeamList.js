import React from "react";
import ATeamMate from "./ATeamMate";

function TeamList (props) {
  
  let teamList = props.teammates.all.map((teammate) => {
    return (
    <div id={teammate.id}>
    <ATeamMate name={teammate.name} title={teammate.title}/>
    </div>
    )
  })
  return <div>{teamList}</div>
}

export default TeamList