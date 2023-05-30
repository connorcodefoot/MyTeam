import React from "react";
import ChatInput from "./ChatInput";

function ChatThread (props) {

    const message = props.messages.map(m => {
      return (
      <div key={m.id}>
        <div>{m.user}: {m.text}</div>
      </div>
      )
    }
  );
  return (
  <>
  <ul>{message}</ul>
  <ChatInput
  onSave = {props.onSave} />
  </>
  )
}

export default ChatThread