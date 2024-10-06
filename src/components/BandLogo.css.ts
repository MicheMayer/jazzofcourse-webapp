import { vars } from '@styles'
import type { Color } from '@styles'
import { recipe } from '@vanilla-extract/recipes'

const forms = {
    j: {
        maskImage: `url(/logos/band/j.svg)`,
        width: "48.059196mm",
        height: "64.193886mm",
    },
    jazz: {
        maskImage: `url(/logos/band/jazz.svg)`,
        width: "132.29195mm",
        height: "64.193886mm",
    },
    instruments: {
        maskImage: `url(/logos/band/instruments.svg)`,
        width: "180.25079mm",
        height: "83.240555mm",
    },
    full: {
        maskImage: `url(/logos/band/full.svg)`,
        width: "180.25075mm",
        height: "109.90576mm",
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
        width: '500px',
        height: '500px',
        maskRepeat: 'no-repeat',
    },
    variants: {
        form: { ...forms },
        color: { ...colors }
    }
})
