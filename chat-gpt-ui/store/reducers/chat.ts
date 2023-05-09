import { Chat, Message } from '../../interface/objects'
import { Constants } from '../../utils/constants'
import { SELECT_CHAT, CHAT_SEND_MESSAGE } from '../actions/type'

export interface StateProps {
  selectedChat: string
  chats: Chat[]
}

export const initialState: StateProps = {
  selectedChat: '',
  chats: [],
}

function reducer(state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case SELECT_CHAT:
      return { ...state, selectedChat: payload }

    case CHAT_SEND_MESSAGE:
      const chatIndex =
        state.selectedChat == ''
          ? 0
          : state.chats.findIndex((chat) => chat.id == state.selectedChat)

      const updatedChats = [...state.chats]

      console.log(chatIndex, updatedChats)

      let updatedChat: Chat
      let updatedSelectedChat = state.selectedChat

      if (state.selectedChat == '') {
        const createdAt = new Date().getTime()
        updatedSelectedChat = `${state.chats.length}_${createdAt}`

        updatedChat = {
          id: updatedSelectedChat,
          title: `Chat ${state.chats.length + 1}`,
          createdAt: createdAt,
          messages: [],
        }

        updatedChats.push(updatedChat)
      } else {
        updatedChat = { ...updatedChats[chatIndex] }
      }

      const existingMessage = [...updatedChat.messages]

      const messageId = 'message_' + new Date().getTime()
      existingMessage.push({
        id: messageId,
        prompt: payload,
        reply: Constants.PLACEHOLDER_MESSAGE,
      } as Message)

      updatedChat['messages'] = existingMessage

      updatedChats[chatIndex] = updatedChat

      console.log(updatedSelectedChat, updatedChats)

      return { selectedChat: updatedSelectedChat, chats: updatedChats }

    default:
      return state
  }
}

export default { initialState, reducer }
