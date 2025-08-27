import { defineCollection, z } from "astro:content";


const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    stack: z.array(z.string()).optional(),
    demoUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    variant: z.enum(["default", "wide"]).default("default").optional(),
    featured: z.boolean().default(false).optional(),
    date: z.string().optional(),
  })
})

export const collections = {
  projects: projectCollection,
};