import { defineCollection, z } from 'astro:content';

// Define categories as const for type safety
const categories = [
    'Neuroscience',
    'Cognitive Science',
    'Counseling & Therapy',
    'Daily Practices',
    'Mental Health'
] as const;

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        category: z.enum(categories),
        tags: z.array(z.string()),
        author: z.string().optional(),
        image: z.string().optional(),
        // Sources and resources
        sources: z.array(z.object({
            title: z.string(),
            url: z.string(),
            type: z.enum(['study', 'article', 'book']).optional()
        })).optional(),
        furtherReading: z.array(z.object({
            title: z.string(),
            url: z.string(),
            description: z.string().optional()
        })).optional(),
        relatedVideos: z.array(z.object({
            title: z.string(),
            url: z.string(),
            creator: z.string().optional()
        })).optional()
    })
});

export const collections = {
    blog
};
