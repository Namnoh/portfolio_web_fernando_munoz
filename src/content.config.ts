import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { TAGS } from 'src/constants';
import { type Tag } from 'src/types';


const experience = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
    schema: z.object({
        title: z.string(),
        company: z.string(),
        date: z.string(),
        link: z.string().optional(),
    })
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.enum(Object.keys(TAGS) as [Tag, ...Tag[]])),
        github: z.string().optional(),
        link: z.string().optional(),
        img: z.string(),
        video: z.string().optional(),
    })
});

export const collections = { experience:experience, projects:projects };