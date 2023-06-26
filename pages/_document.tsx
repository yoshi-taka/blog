import { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/analytics'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <Analytics />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
