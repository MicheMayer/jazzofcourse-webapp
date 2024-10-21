import { defineCollection, reference, z } from 'astro:content'

const events = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		location: reference('locations').optional(),
		heroImage: image().refine((img) => img.width >= 1080, {
			message: "Cover image must be at least 1080 pixels wide!",
		}).optional(),
	}),
})

const locations = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
	}),
})

export const collections = { events, locations }
