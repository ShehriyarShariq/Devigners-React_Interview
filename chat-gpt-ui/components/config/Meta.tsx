import Head from 'next/head'

interface MetaProps {
  title: string
  keywords: string
  description: string
}

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Event Tracker App',
  keywords: 'event, tracker, web app, instagram',
  description: 'Instagram Event Tracker',
}

export default Meta
