import { ReactNode } from 'react'
import Meta from './Meta'
import { withRouter, NextRouter } from 'next/router'
import { StoreProvider } from '../../store/store'

interface ProviderProps {
  path: string | undefined
  children?: ReactNode
}

interface LayoutProps {
  children?: ReactNode
  router: NextRouter
}

const Providers = ({ path, children }: ProviderProps) => {
  return <StoreProvider>{children}</StoreProvider>
}

const Layout = ({ children, router }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Providers path={router.pathname}>
        <main className="w-full h-full">{children}</main>
      </Providers>
    </>
  )
}

export default withRouter(Layout)
