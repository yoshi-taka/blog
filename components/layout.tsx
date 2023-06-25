import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { BIZ_UDPMincho } from 'next/font/google';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const bizud = BIZ_UDPMincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-biz',
});

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className={bizud.className}>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
