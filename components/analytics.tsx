import Script from 'next/script'

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID

function Analytics() {
  return (
    <div className="container">
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${ANALYTICS_ID}', 'auto');
        ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
    </div>
  )
}

export default Analytics
