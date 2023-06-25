import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="data:," />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content='@ask_yoshi_taka blog'
        key="description"
      />
      <meta property="og:image" content="" key="image" />
      <meta property="og:site_name" content="@ask_yoshi_taka blog" />
    </Head>
  )
}

export default Meta
