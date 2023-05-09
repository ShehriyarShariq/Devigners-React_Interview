import React from 'react'
import PromptExampleList from './PromptExampleList'

const ChatDefaultView = () => {
  return (
    <div className="w-full h-full pb-6">
      <div className="w-3/4 h-full mx-auto flex flex-col justify-evenly items-center text-chat_default_preview_text_color">
        <div>
          <div className="font-semibold text-6xl mb-3 text-center">ChatGPT</div>
          <div className="text-center">
            Welcome back! Please enter your details.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <PromptExampleList
            type="User"
            description="Don’t have an account?"
            examples={[
              'Got any creative ideas for a 10 year olds birthday?',
              "Got any creative ideas for a 10 year old's birthday?",
              "Got any creative ideas for a 10 year old's birthday",
            ]}
          />
          <PromptExampleList
            type="Folder"
            description="Don't have an account?"
            examples={[
              "Got any creative ideas for a 10 year old's birthday?",
              "Got any creative ideas for a 10 year old's birthday?",
              "Got any creative ideas for a 10 year old's birthday",
            ]}
          />
          <PromptExampleList
            type="Work"
            description="Don't have an account?"
            examples={[
              "Got any creative ideas for a 10 year old's birthday?",
              "Got any creative ideas for a 10 year old's birthday?",
              "Got any creative ideas for a 10 year old's birthday?",
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatDefaultView
