import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');

  const sorted = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: 'Amrita Labs Blog',
    description: 'Chrome extensions, Shopify apps, and indie maker insights from Amrita Labs.',
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
      link: `/blog/${post.id}/`,
      content: post.body,
    })),
    customData: '<language>en-us</language>',
  });
}
