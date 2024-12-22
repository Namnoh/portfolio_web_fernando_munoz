import { defineCollection, z } from "astro:content";
import { TAGS, type Tag } from 'src/constants';

const experience = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        company: z.string(),
        date: z.string(),
        link: z.string().optional(),
    })
});

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        tags: z.array(z.enum(Object.keys(TAGS) as [Tag, ...Tag[]])),
        github: z.string().optional(),
        link: z.string().optional(),
        img: z.string(),
    })
});

export const collections = { experience:experience, projects:projects };