import React, { useContext, useReducer, ReactNode } from 'react'

import ChatReducer, { StateProps as ChatStateProps } from './reducers/chat'
import SignupReducer, {
  StateProps as SignupStateProps,
} from './reducers/signup'
import signup from './reducers/signup'

interface InitialStateProps {
  chat: ChatStateProps
  signup: SignupStateProps
}

interface StoreProviderProps {
  children?: ReactNode
}

const Store = React.createContext<any>({} as any)
Store.displayName = 'Store'

const initialState: InitialStateProps = {
  chat: ChatReducer.initialState,
  signup: SignupReducer.initialState,
}

const rootReducer = ({ chat, signup }: InitialStateProps, action: any) => ({
  chat: ChatReducer.reducer(chat, action),
  signup: SignupReducer.reducer(signup, action),
})

export const useStore = () => useContext(Store)

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  const store = React.useMemo(() => [state, dispatch], [state])

  return <Store.Provider value={store}>{children}</Store.Provider>
}
