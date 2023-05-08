import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/nav/NavBar'

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Home - ChatGPT</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full relative">
        <div className="w-[280px] h-full absolute left-0 z-0 bg-chats_side_bar"></div>
        <div className="relative z-10">
          <NavBar isSections={true} />
        </div>
      </main>
    </div>
  )
}

export default Home
