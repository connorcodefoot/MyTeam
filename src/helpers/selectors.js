
export function getMessages (state, conversationID) {

  const messages = []

  state.conversations.forEach(convo => {

    if (convo.conversationID === conversationID) {

      convo.messages.forEach(message => {messages.push(message)})

    }
  })
  return messages
}