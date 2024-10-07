import { vars } from '@styles'
import type { Color } from '@styles'
import { recipe } from '@vanilla-extract/recipes'

const forms = {
    j: {
        maskImage: `url(/logos/band/j.svg)`,
    },
    jazz: {
        maskImage: `url(/logos/band/jazz.svg)`,
    },
    instruments: {
        maskImage: `url(/logos/band/instruments.svg)`,
    },
    full: {
        maskImage: `url(/logos/band/full.svg)`,
    },
} as const

export const colors = Object.entries(vars.colors)
    .reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: { backgroundColor: value },
        }),
        {} as Record<Color, { backgroundColor: string }>
    )

export type Form = keyof typeof forms

export const mask = recipe({
    base: {
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        maskPosition: 'center',
    },
    variants: {
        form: { ...forms },
        color: { ...colors }
    }
})
