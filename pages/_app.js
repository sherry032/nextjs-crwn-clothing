import { Provider } from 'react-redux'
import  store from "../store/store";
import Layout from "../components/layout/layout.component"
import { Elements } from '@stripe/react-stripe-js';
import {stripePromise} from "../utils/stripe/stripe.utils"
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

function MyApp({ Component, pageProps : { session, ...pageProps } }) {

  return <SessionProvider session={session}>
     <Provider store={store}>
          <Elements stripe={stripePromise} >
            <Layout>
           <Component {...pageProps} />
           </Layout>
          </Elements>
     </Provider>
     </ SessionProvider>
}

export default MyApp;
