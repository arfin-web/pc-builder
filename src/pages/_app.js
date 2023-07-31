import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Footer from '@/components/Footer'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  )
}
