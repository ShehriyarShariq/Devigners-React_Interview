import React from 'react'
import { useStore } from '../../store/store'
import { sendMessage } from '../../store/actions/chat'

interface PromptExampleListItemProps {
  text: string
}

const PromptExampleListItem = ({ text }: PromptExampleListItemProps) => {
  const [, dispatch] = useStore()

  return (
    <div
      className="bg-chat_default_preview_example_bg_color text-chat_default_preview_example_text_color font-poppins font-medium px-4 py-3 rounded-md hover:cursor-pointer hover:filter hover:brightness-90"
      onClick={() => sendMessage(text)(dispatch)}
    >
      "{text}"
    </div>
  )
}

export default PromptExampleListItem
