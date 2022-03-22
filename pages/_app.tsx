import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

import { NavBar } from '../components';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <>
            <Head>
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    );
};

export default App;
