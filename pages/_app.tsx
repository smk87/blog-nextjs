import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

import { NavBar } from '../components';
import { useAuth } from '../hooks';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    const user = {
        isLoggedIn: true,
        roles: ['admin', 'editor'],
    };

    useAuth(user); // Checks the user for Authentication and Authorization

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
