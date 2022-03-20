import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import { getPost, getSlugs } from '../../lib';

interface FirstPageProps {
    title: string;
    body: string;
}

interface StaticPathParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticPaths: GetStaticPaths<StaticPathParams> = async () => {
    const slugs = await getSlugs();

    return {
        paths: slugs.map((slug) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    };
};

// Good place to run code on the Node.js server
export const getStaticProps: GetStaticProps<
    FirstPageProps,
    StaticPathParams
> = async (context) => {
    const { slug } = context.params!;
    const post = await getPost(slug);

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
                <h1>{title}</h1>
                <article dangerouslySetInnerHTML={{ __html: body }} />
            </main>
        </>
    );
};

export default FirstPostPage;
