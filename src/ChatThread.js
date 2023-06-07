import React from "react";
import ChatInput from "./ChatInput";

function ChatThread (props) {

    const messages = props.messages.map(m => {
      return (
      <div>
        <div>{m.teammate}: {m.text}</div>
      </div>
      )
    }
  );
  return (
  <>
  <ul>{messages}</ul>
  <ChatInput
  onSave = {props.onSave} 
  conversationSelectedID = {props.conversationSelectedID}
  />
  </>
  )
}

export default ChatThread