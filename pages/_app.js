import '../styles/globals.css'
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'

Amplify.configure({ ...config, ssr: true })

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
