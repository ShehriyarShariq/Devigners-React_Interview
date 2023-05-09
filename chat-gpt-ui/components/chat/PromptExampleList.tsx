import React from 'react'
import { Iconly } from 'react-iconly'
import PromptExampleListItem from './PromptExampleListItem'

interface PromptExampleListProps {
  type: string
  description: string
  examples: string[]
}

const PromptExampleList = ({
  type,
  description,
  examples,
}: PromptExampleListProps) => {
  return (
    <div className="flex flex-col items-center">
      <Iconly name={type} set="light" size={32} />
      <div className="text-chat_default_preview_example_text_color text-lg font-medium mt-4 mb-7">
        {description}
      </div>
      <div className="flex flex-col gap-4">
        {examples.map((example, index) => (
          <PromptExampleListItem
            key={'example_' + index + '_' + new Date().getTime()}
            text={example}
          />
        ))}
      </div>
    </div>
  )
}

export default PromptExampleList
