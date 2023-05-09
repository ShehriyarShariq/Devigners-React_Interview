import React from 'react'
import PrimaryButton from '../button/PrimaryButton'
import SocialButton from '../button/SocialButton'
import InputField from './InputField'
import LabelCheckbox from './LabelCheckbox'
import Link from 'next/link'

const LoginForm = () => {
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
      <div className="mb-6 flex justify-between items-center">
        <LabelCheckbox
          id="remember"
          name="remember"
          checked={false}
          onChange={function (event) {}}
          label={'Remember for 30 days'}
        />
        <Link href="/auth/login">
          <span className="text-secondary text-sm font-semibold">
            Forgot password
          </span>
        </Link>
      </div>
      <PrimaryButton label={'Sign in'} isFill={true} onClick={() => {}} />
      <div className="w-full mt-4">
        <SocialButton
          type="google"
          isFill={true}
          onClick={() => {}}
          isLogin={true}
        />
      </div>
    </>
  )
}

export default LoginForm
