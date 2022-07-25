import { Provider } from 'react-redux'
import  {store, persistor} from "../store/store";
import Layout from "../components/layout/layout.component"
import { Elements } from '@stripe/react-stripe-js';
import {stripePromise} from "../utils/stripe/stripe.utils"
import { SessionProvider } from "next-auth/react"
import { PersistGate } from 'redux-persist/integration/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps : { session, ...pageProps } }) {

  return <SessionProvider session={session}>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Elements stripe={stripePromise} >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Elements>
       </PersistGate>
     </Provider>
     </ SessionProvider>
}

export default MyApp;
