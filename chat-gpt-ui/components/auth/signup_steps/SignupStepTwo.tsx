import React from 'react'
import InputField from '../InputField'
import PrimaryButton from '../../button/PrimaryButton'
import { useStore } from '../../../store/store'
import BackStepForm from '../BackStepForm'
import {
  SignupStepTwoSchemaProps,
  signupStepTwoSchema,
} from '../../../schemas/schema'
import { useFormik } from 'formik'
import { updateSignupForm } from '../../../store/actions/signup'

interface SignupStepTwoProps {
  onComplete: Function
}

const SignupStepTwo = ({ onComplete }: SignupStepTwoProps) => {
  const [state, dispatch] = useStore()
  const { signup } = state

  const initialValues: SignupStepTwoSchemaProps = {
    name: signup.form['name'],
    password: signup.form['password'],
    confirmPassword: signup.form['password'],
  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: signupStepTwoSchema,
    onSubmit: (values) => {
      updateSignupForm(values)(dispatch)
      setTimeout(() => {
        onComplete()
      }, 0)
    },
  })

  return (
    <>
      <BackStepForm />
      <form onSubmit={handleSubmit} noValidate={true}>
        <div className="mb-5">
          <InputField
            name="name"
            type={'text'}
            label="Name"
            placeholder={'Enter your name'}
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            touched={touched.name}
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
        <div className="mb-6">
          <InputField
            name="confirmPassword"
            type={'password'}
            label="Confirm Password"
            placeholder={'Enter your password again'}
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
        </div>
        <PrimaryButton label={'Create'} isFill={true} onClick={handleSubmit} />
      </form>
    </>
  )
}

export default SignupStepTwo
