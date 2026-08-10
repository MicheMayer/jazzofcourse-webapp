import { glob } from 'astro/loaders'
import { defineCollection, reference } from 'astro:content'
import { z } from 'astro/zod'

const events = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      location: reference('locations').optional(),
      heroImage: image().optional(),
      weblink: z.url().optional(),
      lineup: z.array(reference('musicians')).optional(),
    }),
})

const locations = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
  }),
})

const musicians = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/musicians' }),
  schema: z.object({
    name: z.string(),
    instrument: z.string(),
  }),
})

export const collections = { events, locations, musicians }