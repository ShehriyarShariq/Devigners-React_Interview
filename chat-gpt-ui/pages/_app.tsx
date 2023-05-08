import React from 'react'
import Layout from '../components/config/Layout'
import { AppProps } from 'next/app'

import '@fontsource/inter'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

import '@fontsource/poppins/500.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
