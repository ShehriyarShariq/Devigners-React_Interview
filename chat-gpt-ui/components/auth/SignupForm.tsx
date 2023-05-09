import React, { useMemo } from 'react'
import { useStore } from '../../store/store'
import SignupStepOne from './signup_steps/SignupStepOne'
import SignupStepTwo from './signup_steps/SignupStepTwo'
import { moveToNextStep } from '../../store/actions/signup'

const SignupForm = () => {
  const [state, dispatch] = useStore()
  const { signup } = state

  const formStep = useMemo(() => {
    switch (signup.step) {
      case 1:
        return <SignupStepOne onComplete={() => moveToNextStep()(dispatch)} />
      case 2:
        return <SignupStepTwo onComplete={() => alert('Success')} />
      default:
        return <></>
    }
  }, [signup.step])

  return formStep
}

export default SignupForm
