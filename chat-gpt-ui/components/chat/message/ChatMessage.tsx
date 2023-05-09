import React from 'react'
import { Iconly } from 'react-iconly'

interface ChatMessageProps {
  message: string
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className="bg-chat_user_message_bg_color text-chat_user_message_text_color py-6">
      <div className="w-3/4 mx-auto flex items-start gap-6">
        <div className="p-2 bg-secondary rounded-sm">
          <Iconly name="User" set="light" size="medium" />
        </div>
        <div className="pt-2">{message}</div>
      </div>
    </div>
  )
}

export default ChatMessage
