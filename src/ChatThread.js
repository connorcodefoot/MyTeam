import React from "react";

function ChatThread (props) {

    const message = props.messages.map(m => {
      return (
      <div key={m.id}>
        <div>{m.user}: {m.text}</div>
      </div>
      )
    }
  );
  return <ul>{message}</ul>
}

export default ChatThread