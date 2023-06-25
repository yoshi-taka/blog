import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-xl md:text-xl  tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        cd ~ # blog top へ
      </Link>
    </h2>
  )
}

export default Header
