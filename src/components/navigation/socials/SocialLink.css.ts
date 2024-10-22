import { sprinkles, vars, type Color } from '@styles'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const container =
    sprinkles({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 'xs',
    })

export const colorVariants = Object.entries(vars.colors)
    .reduce(
        (colorDictionary, [key, value]) => ({
            ...colorDictionary,
            [key]: { color: value, fill: value },
        }),
        {} as Record<Color, { color: string, fill: string }>
    )

export type SocialLinkColor = keyof typeof colorVariants

export const icon = style({
    width: '1.5em',
    height: '1.5em',
})

export const socialLink = recipe({
    base: container,
    variants: {
        color: {
            ...colorVariants,
        },
    },
    defaultVariants: { color: 'secondaryLight' },
})