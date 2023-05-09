import React from 'react'
import InputField from '../InputField'
import PrimaryButton from '../../button/PrimaryButton'
import { useStore } from '../../../store/store'
import { updateSignupForm } from '../../../store/actions/signup'
import SocialButton from '../../button/SocialButton'
import { useFormik } from 'formik'
import {
  SignupStepOneSchemaProps,
  signupStepOneSchema,
} from '../../../schemas/schema'

interface SignupStepOneProps {
  onComplete: Function
}

const SignupStepOne = ({ onComplete }: SignupStepOneProps) => {
  const [state, dispatch] = useStore()
  const { signup } = state

  const initialValues: SignupStepOneSchemaProps = {
    email: signup.form['email'],
  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: signupStepOneSchema,
    onSubmit: (values) => {
      updateSignupForm(values)(dispatch)
      setTimeout(() => {
        onComplete()
      }, 0)
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit} noValidate={true}>
        <div className="mb-4">
          <InputField
            name="email"
            type={'email'}
            placeholder={'Enter your email'}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            touched={touched.email}
          />
        </div>
        <PrimaryButton
          label={'Get started'}
          isFill={true}
          onClick={handleSubmit}
        />
      </form>
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

export default SignupStepOne
