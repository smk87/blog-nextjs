import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import NavBar from '../components/NavBar';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    );
};

export default App;
