import React, { useState } from 'react'
import { Iconly } from 'react-iconly'
import { useStore } from '../../store/store'
import { sendMessage } from '../../store/actions/chat'

interface ChatInputFieldProps {
  placeholder: string
}

const ChatInputField = ({ placeholder }: ChatInputFieldProps) => {
  const [, dispatch] = useStore()
  const [message, setMessage] = useState('')

  return (
    <div className="w-3/4 mx-auto flex items-center gap-5 bg-chat_message_field_bg_color rounded-lg px-5 py-6">
      <input
        type="text"
        className="flex-1 outline-none border-none bg-transparent text-chat_message_field_text_color placeholder:text-chat_message_field_placeholder_color"
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            if (message.length > 0) {
              sendMessage(message)(dispatch)
              setMessage('')
            }
          }
        }}
      />
      <span
        onClick={() => {
          if (message.length > 0) {
            sendMessage(message)(dispatch)
          }
        }}
        className="hover:cursor-pointer"
      >
        <Iconly name="Send" primaryColor="#667085" />
      </span>
    </div>
  )
}

export default ChatInputField
