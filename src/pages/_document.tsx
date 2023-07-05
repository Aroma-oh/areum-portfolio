import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="프론트엔드 오아름 포트폴리오입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.aroma-oh-portfolio.com" />
        <link rel="icon" href="/favicon.png" />
        {/* og */}
        <meta property="og:title" content="프론트엔드 오아름 포트폴리오" />
        <meta property="og:description" content="프론트엔드 오아름 포트폴리오입니다." />
        <meta property="og:image" content="/intro.jpg" />
        <meta property="og:url" content="https://www.aroma-oh-portfolio.com" />
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="프론트엔드 오아름 포트폴리오" />
        <meta name="twitter:description" content="프론트엔드 오아름 포트폴리오입니다." />
        <meta name="twitter:image" content="/intro.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
