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

      <main className="w-full h-full flex relative">
        <div className="w-[280px] h-full absolute left-0 z-0 bg-chats_side_bar"></div>
        <div className="w-full flex-1 flex flex-col relative z-10">
          <NavBar isSections={true} />
          <div className="w-full flex-1 grid grid-cols-[280px_1fr]">
            <div></div>
            <div className="w-full h-full">
              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
