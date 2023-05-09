import { Dispatch } from 'react'
import { SELECT_CHAT, CHAT_SEND_MESSAGE } from './type'

export const selectChat = (id: string) => (dispatch: Dispatch<any>) => {
  return dispatch({
    type: SELECT_CHAT,
    payload: id,
  })
}

export const sendMessage = (message: string) => (dispatch: Dispatch<any>) => {
  return dispatch({
    type: CHAT_SEND_MESSAGE,
    payload: message,
  })
}
