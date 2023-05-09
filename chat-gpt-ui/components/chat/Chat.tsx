import React, { useEffect } from 'react'
import ChatInputField from './ChatInputField'
import { useStore } from '../../store/store'
import ChatDefaultView from './ChatDefaultView'
import Messages from './message/Messages'

const Chat = () => {
  const [state] = useStore()
  const { chat } = state

  return (
    <div className="w-full h-full flex flex-col justify-between pb-12">
      {chat.selectedChat == '' ? <ChatDefaultView /> : <Messages />}
      <ChatInputField placeholder={'Send a message'} />
    </div>
  )
}

export default Chat
