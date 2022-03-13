import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="This is about page" />
            </Head>
            <main>
                <h1>About</h1>
            </main>
        </>
    );
};

export default About;
