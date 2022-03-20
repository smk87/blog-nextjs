import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

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
                    <li>
                        <Link href="/posts/first-post">First Post</Link>
                    </li>
                </ul>
            </main>
        </>
    );
};

export default HomePage;
