
export function getMessages (state, conversationID) {

  console.log('Get messages runs')

  const messages = []

  state.conversations.forEach(convo => {

    if (convo.conversationID === conversationID) {

      convo.messages.forEach(message => {messages.push(message)})

    }
  })
  return messages
}