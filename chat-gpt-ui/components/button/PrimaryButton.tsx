import React from 'react'

interface PrimaryButtonProps {
  label: string
  isFill: boolean
}

const PrimaryButton = ({ label, isFill }: PrimaryButtonProps) => {
  return (
    <div
      className={
        'h-[50px] font-semibold bg-secondary text-primary_button_label_color flex items-center justify-center rounded-lg ' +
        (isFill ? 'w-full' : 'w-auto px-6')
      }
    >
      {label}
    </div>
  )
}

export default PrimaryButton
