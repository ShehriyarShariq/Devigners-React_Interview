import React from 'react'

interface PrimaryButtonProps {
  label: string
  isFill: boolean
  onClick: Function
}

const PrimaryButton = ({ label, isFill, onClick }: PrimaryButtonProps) => {
  return (
    <div
      className={
        'h-[50px] font-semibold bg-secondary text-primary_button_label_color flex items-center justify-center rounded-lg hover:cursor-pointer hover:filter hover:brightness-90 ' +
        (isFill ? 'w-full' : 'w-auto px-6')
      }
      onClick={() => onClick()}
    >
      {label}
    </div>
  )
}

export default PrimaryButton
