import React from 'react';

function TeamMate(props) {
  return (
    <>
    <div className="teammate-list-item-content">
    <h2>{props.name}</h2>
    <p>{props.title}</p>
    </div>
    </>
  )
}

export default TeamMate;