import React from 'react'
import PrimaryButton from '../button/PrimaryButton'
import SocialButton from '../button/SocialButton'
import InputField from './InputField'
import LabelCheckbox from './LabelCheckbox'
import Link from 'next/link'
import { useFormik } from 'formik'
import { LoginSchemaProps, loginSchema } from '../../schemas/schema'

const LoginForm = () => {
  const initialValues: LoginSchemaProps = {
    email: '',
    password: '',
    rememberMe: false,
  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert('Success')
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit} noValidate={true}>
        <div className="mb-5">
          <InputField
            name="email"
            type={'email'}
            label="Email"
            placeholder={'Enter your email'}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            touched={touched.email}
          />
        </div>
        <div className="mb-6">
          <InputField
            name="password"
            type={'password'}
            label="Password"
            placeholder={'Enter your password'}
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            touched={touched.password}
          />
        </div>
        <div className="mb-6 flex justify-between items-center">
          <LabelCheckbox
            name="rememberMe"
            checked={values.rememberMe}
            onChange={handleChange}
            label={'Remember for 30 days'}
          />
          <Link href="/auth/login">
            <span className="text-secondary text-sm font-semibold">
              Forgot password
            </span>
          </Link>
        </div>
        <PrimaryButton label={'Sign in'} isFill={true} onClick={handleSubmit} />
      </form>
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
