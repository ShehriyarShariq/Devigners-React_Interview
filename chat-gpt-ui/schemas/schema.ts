// schema.ts
import * as Yup from 'yup'

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

export interface LoginSchemaProps {
  email: string
  password: string
  rememberMe: boolean
}

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(6)
    .matches(passwordRules, { message: 'Please enter a valid password' })
    .required('Required'),
  rememberMe: Yup.boolean().default(false),
})

export interface SignupStepOneSchemaProps {
  email: string
}

export const signupStepOneSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
})

export interface SignupStepTwoSchemaProps {
  name: string
  password: string
  confirmPassword: string
}

export const signupStepTwoSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Required'),
  password: Yup.string()
    .min(6)
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Required'),
  confirmPassword: Yup.string()
    .min(6)
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Required'),
})
