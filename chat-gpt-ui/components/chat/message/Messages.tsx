import React, { Fragment, useMemo } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { useStore } from '../../../store/store'
import { Chat } from '../../../interface/objects'
import ChatMessage from './ChatMessage'
import ChatReply from './ChatReply'

const Messages = () => {
  const [state] = useStore()
  const { chat } = state

  const selectedChat: Chat = useMemo(() => {
    const chatIndex = chat.chats.findIndex(
      (c: Chat) => c.id == chat.selectedChat,
    )

    return chat.chats[chatIndex]
  }, [chat.chats])

  return (
    <div className="w-full h-full pt-10 pb-6">
      <Scrollbars>
        {selectedChat.messages.map((message, index) => (
          <Fragment key={message.id}>
            <ChatMessage message={message.prompt} />
            <ChatReply
              reply={message.reply}
              isAnimate={index == selectedChat.messages.length - 1}
            />
          </Fragment>
        ))}
      </Scrollbars>
    </div>
  )
}

export default Messages
