import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Home - ChatGPT</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-bg_color w-full h-full"></main>
    </div>
  )
}

export default Home
