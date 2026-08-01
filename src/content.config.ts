import { glob } from 'astro/loaders'
import { defineCollection, reference, z } from 'astro:content'

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      location: reference('locations').optional(),
      heroImage: image().optional(),
      weblink: z.string().url().optional(),
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