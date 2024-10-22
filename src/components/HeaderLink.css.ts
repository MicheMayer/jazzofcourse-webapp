import { sprinkles, vars } from '@styles'
import type { Color } from '@styles'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const link = style([
	{
		cursor: 'pointer',
	}
])

export const colorVariants = Object.entries(vars.colors)
    .reduce(
        (colorDictionary, [key, value]) => ({
            ...colorDictionary,
            [key]: { color: value, fill: value },
        }),
        {} as Record<Color, { color: string, fill: string }>
    )

export type HeaderLinkColor = keyof typeof colorVariants

export const headerLink = recipe({
    base: link,
    variants: {
        color: {
            ...colorVariants,
        },
    },
    defaultVariants: { color: 'secondaryLight' },
})