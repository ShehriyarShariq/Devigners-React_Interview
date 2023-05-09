import React from 'react'
import PrimaryButton from '../button/PrimaryButton'
import SocialButton from '../button/SocialButton'
import Link from 'next/link'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

interface AuthFormProps {
  isLogin: boolean
}

const AuthForm = ({ isLogin }: AuthFormProps) => {
  return (
    <div className="w-full flex-1">
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
        {isLogin ? <LoginForm /> : <SignupForm />}
        <div className="mt-8 text-sm text-center">
          Don't have an account?{' '}
          <Link
            href={`/auth/${isLogin ? 'signup' : 'login'}`}
            className="text-secondary font-semibold"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
