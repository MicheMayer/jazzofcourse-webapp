import { vars } from '@styles'
import type { Color } from '@styles'
import { recipe } from '@vanilla-extract/recipes'
import j from '@assets/logos/band/j.svg'
import jazz from '@assets/logos/band/jazz.svg'
import instruments from '@assets/logos/band/instruments.svg'
import full from '@assets/logos/band/full.svg'

const forms = {
    j: { maskImage: `url(${j.src})` },
    jazz: { maskImage: `url(${jazz.src})` },
    instruments: { maskImage: `url(${instruments.src})` },
    full: { maskImage: `url(${full.src})` },
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
        form: {
            j: {
                maskImage: `url(${j.src})`,
                width: "48.059196mm",
                height: "64.193886mm",
            },
            jazz: {
                maskImage: `url(${jazz.src})`,
                width: "132.29195mm",
                height: "64.193886mm",
            },
            instruments: {
                maskImage: `url(${instruments.src})`,
                width: "180.25079mm",
                height: "83.240555mm",
            },
            full: {
                maskImage: `url(${full.src})`,
                width: "180.25075mm",
                height: "109.90576mm",
            },
        },
        color: { ...colors }
    }
})
