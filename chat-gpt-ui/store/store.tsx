import React, { useContext, useReducer, ReactNode } from 'react'

import ChatReducer, { StateProps as ChatStateProps } from './reducers/chat'

interface InitialStateProps {
  chat: ChatStateProps
}

interface StoreProviderProps {
  children?: ReactNode
}

const Store = React.createContext<any>({} as any)
Store.displayName = 'Store'

const initialState: InitialStateProps = {
  chat: ChatReducer.initialState,
}

const rootReducer = ({ chat }: InitialStateProps, action: any) => ({
  chat: ChatReducer.reducer(chat, action),
})

export const useStore = () => useContext(Store)

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  const store = React.useMemo(() => [state, dispatch], [state])

  return <Store.Provider value={store}>{children}</Store.Provider>
}
