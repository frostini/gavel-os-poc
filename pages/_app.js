import '../styles/globals.css'
import Amplify, { AuthModeStrategyType } from 'aws-amplify'
import config from '../src/aws-exports'
import { AuthProvider } from '../contexts/auth'

Amplify.configure({ 
  ...config, 
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  },
  ssr: true 
})

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AuthProvider>
      { getLayout( <Component {...pageProps} /> ) }
    </AuthProvider>
  )
}
