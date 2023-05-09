import React from 'react'
import InputField from './InputField'
import PrimaryButton from '../button/PrimaryButton'

const SignupAdditionalForm = () => {
  return (
    <>
      <div className="mb-5">
        <InputField
          type={'email'}
          label="Email"
          placeholder={'Enter your email'}
        />
      </div>
      <div className="mb-6">
        <InputField
          type={'password'}
          label="Password"
          placeholder={'Enter your password'}
        />
      </div>
      <div className="mb-6">
        <InputField
          type={'password'}
          label="Confirm Password"
          placeholder={'Enter your password again'}
        />
      </div>
      <PrimaryButton label={'Sign in'} isFill={true} onClick={() => {}} />
    </>
  )
}

export default SignupAdditionalForm
