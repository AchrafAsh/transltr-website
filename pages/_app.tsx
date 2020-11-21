import { AppProps } from 'next/app'
import '@styles/globals.css'

import TransltrWidget from 'transltr'
import 'transltr/dist/index.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <div className='display-arrow'>
                <small>try it</small>
                <img src='/images/arrow.svg' />
            </div>
            <TransltrWidget />
        </>
    )
}

export default MyApp
