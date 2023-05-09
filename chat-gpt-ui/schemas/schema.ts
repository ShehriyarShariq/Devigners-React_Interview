// schema.ts
import * as Yup from 'yup'

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

interface loginSchema {
  email: string
  password: string
}

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(6)
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Required'),
})
