import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Components/Navigation/header'


function MyApp({ Component, pageProps }: AppProps) {
  <Header/>
  return <Component {...pageProps} />
}

export default MyApp
