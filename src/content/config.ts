import { defineCollection, reference, z } from 'astro:content'

const events = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
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
	type: 'data',
	schema: z.object({
		name: z.string(),
	}),
})

const musicians = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		instrument: z.string(),
	}),
})

export const collections = { events, locations, musicians }
