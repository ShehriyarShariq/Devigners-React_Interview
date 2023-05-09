import { Dispatch } from 'react'
import {
  SIGN_UP_NEXT_STEP,
  SIGN_UP_PREV_STEP,
  SIGN_UP_UPDATE_FORM,
} from './type'
import { SignupFields } from '../../interface/objects'

export const moveToNextStep = () => (dispatch: Dispatch<any>) => {
  return dispatch({
    type: SIGN_UP_NEXT_STEP,
  })
}

export const goBackToPrevStep = () => (dispatch: Dispatch<any>) => {
  return dispatch({
    type: SIGN_UP_PREV_STEP,
  })
}

export const updateSignupForm = (formFields: SignupFields) => (
  dispatch: Dispatch<any>,
) => {
  return dispatch({
    type: SIGN_UP_UPDATE_FORM,
    payload: formFields,
  })
}
