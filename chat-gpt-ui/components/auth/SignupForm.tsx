import React from 'react'
import SocialButton from '../button/SocialButton'
import PrimaryButton from '../button/PrimaryButton'
import InputField from './InputField'

const SignupForm = () => {
  return (
    <>
      <div className="mb-4">
        <InputField type={'email'} placeholder={'Enter your email'} />
      </div>
      <PrimaryButton label={'Get started'} isFill={true} onClick={() => {}} />
      <div className="relative my-5">
        <hr className="w-full absolute z-0 top-1/2 -translate-y-1/2" />
        <div className="w-fit text-sm text-auth_form_text_color relative z-10 text-center bg-bg_color p-2 mx-auto">
          OR
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <SocialButton
          type="google"
          isFill={true}
          onClick={() => {}}
          isLogin={false}
        />
        <SocialButton
          type="facebook"
          isFill={true}
          onClick={() => {}}
          isLogin={false}
        />
        <SocialButton
          type="apple"
          isFill={true}
          onClick={() => {}}
          isLogin={false}
        />
      </div>
    </>
  )
}

export default SignupForm
