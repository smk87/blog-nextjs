import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { readFile } from 'fs/promises';

interface FirstPageProps {
    title: string;
    body: string;
}

// Good place to run code on the Node.js server
export const getStaticProps: GetStaticProps<FirstPageProps> = async () => {
    const data = await readFile('content/posts/first-post.json', 'utf8');
    const post = JSON.parse(data);

    return {
        props: {
            ...post,
        },
    };
};

const FirstPostPage: NextPage<FirstPageProps> = ({ title, body }) => {
    return (
        <>
            <Head>
                <title>{title} - My Blog</title>
                <meta name="description" content="This is my blog" />
            </Head>
            <main>
                <h1>First Post</h1>
                <p>{body}</p>
            </main>
        </>
    );
};

export default FirstPostPage;
