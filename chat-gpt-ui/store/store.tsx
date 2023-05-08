import React, { useContext, useReducer, ReactNode } from 'react'

interface InitialStateProps {}

interface StoreProviderProps {
  children?: ReactNode
}

const Store = React.createContext<any>({} as any)
Store.displayName = 'Store'

const initialState: InitialStateProps = {}
const rootReducer = ({}: InitialStateProps, action: any) => ({})

export const useStore = () => useContext(Store)

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  const store = React.useMemo(() => [state, dispatch], [state])

  return <Store.Provider value={store}>{children}</Store.Provider>
}
