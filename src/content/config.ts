import { defineCollection, z } from "astro:content";

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
        // tags: z.string(), Ver cómo se hace esto con los tags
        github: z.string().optional(),
        link: z.string().optional(),
        img: z.string(),
    })
});

export const collections = { experience:experience, projects:projects  };