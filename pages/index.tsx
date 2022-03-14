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
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </main>
        </>
    );
};

export default HomePage;
