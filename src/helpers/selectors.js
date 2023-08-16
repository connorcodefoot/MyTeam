
export function getMessages (state, conversationID) {

  const messages = []

  console.log('get messages called')
  console.log(state.conversations)
  state.conversations.forEach(convo => {


    if (convo.id === conversationID) {

      convo.messages.forEach(message => {messages.push(message)})

    }
  })
  return messages
}
