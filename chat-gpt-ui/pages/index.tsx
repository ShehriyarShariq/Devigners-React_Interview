import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/nav/NavBar'
import Chat from '../components/chat/Chat'
import { useStore } from '../store/store'
import { Chat as ChatObject } from '../interface/objects'
import SidebarChatItem from '../components/chat/SidebarChatItem'

const Home: NextPage = () => {
  const [state] = useStore()
  const { chat } = state

  return (
    <div className="w-full h-full">
      <Head>
        <title>Home - ChatGPT</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full flex relative">
        <div className="w-[280px] h-full absolute left-0 z-0 bg-chats_side_bar "></div>
        <div className="w-full flex-1 flex flex-col relative z-10">
          <NavBar isSections={true} />
          <div className="w-full flex-1 grid grid-cols-[280px_1fr]">
            <div className="w-full h-[90%] mt-6">
              {chat.chats.map((chatObj: ChatObject) => (
                <SidebarChatItem key={chatObj.id} label={chatObj.title} />
              ))}
            </div>
            <Chat />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
