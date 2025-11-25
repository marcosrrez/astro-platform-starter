import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const blog = await getCollection('blog');

    // Sort by publication date, newest first
    const sortedPosts = blog.sort((a, b) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );

    return rss({
        title: 'Florecer Mind',
        description: 'Transform complex academic research into accessible, practical wisdom for everyday people and counselors. Where Research Blooms into Wisdom.',
        site: context.site!,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            author: post.data.author || 'Florecer Mind Research Team',
            categories: [post.data.category, ...post.data.tags],
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
        stylesheet: '/rss-styles.xsl',
    });
}
