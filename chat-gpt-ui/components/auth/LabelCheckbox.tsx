import React, { ChangeEvent } from 'react'

interface LabelCheckboxProps {
  id: string
  name: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label: string
}

const LabelCheckbox = ({
  id,
  name,
  checked,
  onChange,
  label,
}: LabelCheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded-md bg-checkbox_bg_color border border-checkbox_border_color checked:bg-secondary focus:outline-none focus-visible:outline-none"
      />
      <label htmlFor={id} className="ml-2 text-auth_form_text_color text-sm">
        {label}
      </label>
    </div>
  )
}

export default LabelCheckbox
