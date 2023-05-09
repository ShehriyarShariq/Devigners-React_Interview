import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../../components/nav/NavBar'
import AuthForm from '../../components/auth/AuthForm'

const Signup: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Sign up - ChatGPT</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full flex relative">
        <div className="w-full flex-1 flex flex-col relative z-10">
          <NavBar isSections={false} />
          <div className="w-full flex-1">
            <AuthForm isLogin={false} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signup
