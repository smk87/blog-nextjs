import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getPosts } from '../lib';

interface StaticPathParams {
    posts: {
        slug: string;
        title: string;
    }[];
}

export const getStaticProps: GetStaticProps<StaticPathParams> = async () => {
    const posts = await getPosts();

    return {
        props: {
            posts,
        },
    };
};

const HomePage: NextPage<StaticPathParams> = ({ posts }) => {
    return (
        <>
            <Head>
                <title> My Blog</title>
                <meta name="description" content="This is my blog" />
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    {posts.map(({ slug, title }) => (
                        <li key={slug}>
                            <Link href={`/posts/${slug}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default HomePage;
