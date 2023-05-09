import React from 'react'

interface InputFieldProps {
  label?: string
  type: string
  placeholder: string
  //   value: String
  //   onChange: Function
}

const InputField = ({ label, type, placeholder }: InputFieldProps) => {
  return (
    <div className="w-full">
      {label ? (
        <div className="text-sm font-medium text-input_field_label_text_color mb-2">
          {label}
        </div>
      ) : (
        <></>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="h-[50px] px-[14px] w-full rounded-lg border-[1px] border-input_field_border_color bg-input_field_bg_color shadow-sm shadow-input_field_shadow_color placeholder:text-input_field_placeholder_text_color text-input_field_text_color outline-none focus:outline-none"
      />
    </div>
  )
}

export default InputField
