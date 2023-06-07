import React from "react";
import ChatInput from "./ChatInput";

function ChatThread (props) {

    const messages = props.messages.map(m => {
      return (
      <div key={m.id}>
        <div>{m.user}: {m.text}</div>
      </div>
      )
    }
  );
  return (
  <>
  <ul>{messages}</ul>
  <ChatInput
  onSave = {props.onSave} 
  conversationID = {props.conversationID}
  />
  </>
  )
}

export default ChatThread