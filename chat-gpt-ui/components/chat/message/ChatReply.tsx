import React, { useState } from 'react'

import { TypeAnimation } from 'react-type-animation'

interface ChatReplyProps {
  reply: string
  isAnimate: boolean
}

const ChatReply = ({ reply, isAnimate }: ChatReplyProps) => {
  const [showAnimatingCursor, setShowAnimatingCursor] = useState(true)

  return (
    <div className="text-chat_user_message_text_color py-6">
      <div className="w-3/4 mx-auto flex items-start gap-6">
        <div className="bg-secondary rounded-sm w-10 h-10 flex items-center justify-center">
          <img src="images/logo.svg" alt="Logo" className="w-1/2 h-1/2" />
        </div>
        {isAnimate ? (
          <TypeAnimation
            sequence={[
              reply, // Types 'Three' without deleting 'Two'
              () => {
                setShowAnimatingCursor(false)
              },
            ]}
            wrapper="div"
            className="flex-1"
            cursor={showAnimatingCursor}
            repeat={0}
            speed={75}
          />
        ) : (
          <div className="flex-1">{reply}</div>
        )}
      </div>
    </div>
  )
}

export default ChatReply
