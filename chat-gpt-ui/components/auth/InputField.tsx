import React from 'react'

interface InputFieldProps {
  name: string
  label?: string
  type: string
  placeholder: string
  defaultValue?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
  touched: boolean | undefined
}

const InputField = ({
  name,
  label,
  type,
  placeholder,
  defaultValue,
  value,
  onChange,
  error,
  touched,
}: InputFieldProps) => {
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
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-[50px] px-[14px] w-full rounded-lg border-[1px] border-input_field_border_color bg-input_field_bg_color shadow-sm shadow-input_field_shadow_color placeholder:text-input_field_placeholder_text_color text-input_field_text_color outline-none focus:outline-none"
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
      {error && touched ? (
        <div className="w-full text-input_field_error_text_color text-[12px] p-1 pb-0">
          {error}
        </div>
      ) : null}
    </div>
  )
}

export default InputField
