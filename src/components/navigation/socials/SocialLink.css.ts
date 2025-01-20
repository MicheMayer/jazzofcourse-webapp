import { sprinkles, vars, type Color } from '@styles'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const container = style([
    {
        cursor: 'pointer',
    },
    sprinkles({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 'xs',
    }),
])

export const colorVariants = Object.entries(vars.colors)
    .reduce(
        (colorDictionary, [key, value]) => ({
            ...colorDictionary,
            [key]: { color: value, fill: value },
        }),
        {} as Record<Color, { color: string, fill: string }>
    )

export type SocialLinkColor = keyof typeof colorVariants

export const breakpoints = Object.entries(vars.breakpoints)
    .filter(([key, _]) => key !== 'xs')
    .reduce(
        (breakpointDictionary, [key, value]) => ({
            ...breakpointDictionary,
            [key]: {
                '@media': {
                    [`screen and (max-width: ${value})`]: {
                        display: 'none',
                    },
                }
            },
        }),
        {} as Record<string, { '@media': {} }>
    )

export type  SocialLinkMaxWidth = keyof typeof breakpoints

export const icon = style({
    width: '1em',
    height: '1em',
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

export const label = recipe({
    base: {
        display: 'flex',
    },
    variants: {
        minifyAt: {
            ...breakpoints,
        },
    },
})