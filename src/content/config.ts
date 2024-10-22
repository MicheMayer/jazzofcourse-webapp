import { defineCollection, reference, z } from 'astro:content'

const events = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		location: reference('locations').optional(),
		heroImage: image().optional(),
	}),
})

const locations = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
	}),
})

export const collections = { events, locations }
