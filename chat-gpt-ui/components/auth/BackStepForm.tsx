import React from 'react'
import { useStore } from '../../store/store'
import { goBackToPrevStep } from '../../store/actions/signup'

const BackStepForm = () => {
  const [, dispatch] = useStore()

  return (
    <div
      className="w-fit text-secondary font-semibold -mt-4 mb-5 hover:cursor-pointer"
      onClick={() => goBackToPrevStep()(dispatch)}
    >
      Go Back
    </div>
  )
}

export default BackStepForm
