import { Chat, Message } from '../../interface/objects'
import { Constants } from '../../utils/constants'
import {
  SIGN_UP_NEXT_STEP,
  SIGN_UP_PREV_STEP,
  SIGN_UP_UPDATE_FORM,
} from '../actions/type'

export interface StateProps {
  step: number
  minStep: number
  maxStep: number
  form: {
    email: string
    name: string
    password: string
  }
}

export const initialState: StateProps = {
  step: 1,
  minStep: 1,
  maxStep: 2,
  form: {
    email: '',
    name: '',
    password: '',
  },
}

function reducer(state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case SIGN_UP_NEXT_STEP:
      return state.step < state.maxStep
        ? { ...state, step: state.step + 1 }
        : { ...state }

    case SIGN_UP_PREV_STEP:
      return state.step > state.minStep
        ? { ...state, step: state.step - 1 }
        : { ...state }

    case SIGN_UP_UPDATE_FORM:
      return { ...state, form: { ...state.form, ...payload } }

    default:
      return state
  }
}

export default { initialState, reducer }
