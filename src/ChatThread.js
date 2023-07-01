import React from "react";
import ChatInput from "./ChatInput";

function ChatThread (props) {

    const messages = props.messages.map(m => {
      return (
      <div class="chat-message">
        <div>{m.teammate}: {m.message}</div>
      </div>
      )
    }
  );
  return (
  <>
  <div className="message-list">
  <ul>{messages}</ul>
  </div>
  <div className = "new-message-container">
  <ChatInput
  onSubmit = {props.onSubmit} 
  onSubmitAudio = {props.onSubmitAudio}
  conversationSelectedID = {props.conversationSelectedID}
  />
  </div>
  </>
  )
}

export default ChatThread