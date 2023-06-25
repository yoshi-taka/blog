import Link from 'next/link'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        <a className="hover:underline" href="https://twitter.com/ask_yoshi_taka" target="_blank" rel="external noopener noreferrer">
          @ask_yoshi_taka
        </a>

      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        気合と理論で⟹安全工学/患者安全/Safety II/ICS/Cognitive System/成人教育/CoE構築/Full-Service Ownership/Enabling Team/Cloud Finance/transaction-per-user cost/Cloud Fluency/医療全般/文化人類学
      </h4>
    </section>
  )
}

export default Intro
