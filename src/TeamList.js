import React from "react";
import TeamMate from "./TeamMate";

function TeamList (props) {
  
  let teamList = props.teammates.map((teammate) => {
    return (
    <div className="teammates-list-item">
    <li id={teammate.id} onClick={() => props.onChange(teammate.id)} className={props.teammateSelectedID === teammate.id ? 'selected' : ''}>
    <TeamMate 
    name={teammate.name} 
    title={teammate.title}
     />
    </li>
    </div>
    )
  })
  return <ul >{teamList}</ul>
}

export default TeamList

