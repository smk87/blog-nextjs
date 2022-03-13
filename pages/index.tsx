import { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title> My Blog</title>
                <meta name="description" content="This is my blog" />
            </Head>
            <main>
                <h1>My Blog</h1>
            </main>
        </>
    );
};

export default HomePage;
