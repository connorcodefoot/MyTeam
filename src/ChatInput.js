import React from "react";
import { useState } from "react";

function ChatInput (props) {

  const [inputValue, setInputValue] = useState('');

  function handleInputChange (event) {
    setInputValue(event.target.value);
  };

  function submit () {
    props.onSave(inputValue, props.conversationSelectedID)
  }

  return (
    <>
    <form onSubmit={event => event.preventDefault()} autoComplete="off">
    <input
      value={inputValue}
      onChange={handleInputChange}
    >
    </input>
    <button onClick={submit}>Send</button>
    </form>
    </>
  )
}

export default ChatInput