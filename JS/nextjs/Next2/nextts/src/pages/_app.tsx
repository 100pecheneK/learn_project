import '@/styles/main.scss'
import NextNprogress from 'nextjs-progressbar'


export default function MyApp({Component, pageProps}) {
  return (
    <>
      <NextNprogress
        color="#f00"
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}
