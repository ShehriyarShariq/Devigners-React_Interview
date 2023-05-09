import React from 'react'
import PrimaryButton from '../button/PrimaryButton'
import SocialButton from '../button/SocialButton'
import Link from 'next/link'

interface AuthFormProps {
  isLogin: boolean
}

const AuthForm = ({ isLogin }: AuthFormProps) => {
  return (
    <div className="w-full h-full">
      <div className="w-[360px] mt-20 mx-auto text-auth_form_text_color">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="w-12 h-12 mx-auto mb-6"
        />
        <div className="text-3xl font-semibold text-center mb-3">
          {isLogin ? 'Log in to your account' : 'Create an account'}
        </div>
        <div className="text-center mb-8">
          {isLogin
            ? 'Welcome back! Please enter your details.'
            : 'Start your 30-day free trial.'}
        </div>
        <PrimaryButton
          label={isLogin ? 'Sign in' : 'Get started'}
          isFill={true}
          onClick={() => {}}
        />
        {isLogin ? (
          <>
            <SocialButton
              type="google"
              isFill={true}
              onClick={() => {}}
              isLogin={isLogin}
            />
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <SocialButton
              type="google"
              isFill={true}
              onClick={() => {}}
              isLogin={isLogin}
            />
            <SocialButton
              type="facebook"
              isFill={true}
              onClick={() => {}}
              isLogin={isLogin}
            />
            <SocialButton
              type="apple"
              isFill={true}
              onClick={() => {}}
              isLogin={isLogin}
            />
          </div>
        )}
        <div className="mt-8 text-sm text-center">
          Don't have an account?{' '}
          <Link
            href={`/auth/${isLogin ? 'signup' : 'login'}`}
            className="text-secondary"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
