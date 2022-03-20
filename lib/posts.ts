import { readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export const getPost = async (slug: string) => {
    const source = await readFile(`content/posts/${slug}.md`, 'utf8');
    const {
        data: { date, title },
    } = matter(source);
    const body = marked(source);

    return {
        title,
        body,
        date,
    };
};
