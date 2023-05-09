import React from 'react'

interface SidebarChatItemProps {
  label: string
}

const SidebarChatItem = ({ label }: SidebarChatItemProps) => {
  return (
    <div className="w-[90%] mx-auto mb-4 py-4 bg-sidebar_chat_item_bg_color border-[1px] border-sidebar_chat_item_border_color flex items-center justify-center text-sidebar_chat_item_text_color font-medium rounded-lg">
      {label}
    </div>
  )
}

export default SidebarChatItem
