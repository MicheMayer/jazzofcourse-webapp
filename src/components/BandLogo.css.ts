import { vars } from '@styles'
import type { Color } from '@styles'
import { recipe } from '@vanilla-extract/recipes'

const forms = {
    'j': 'logos/band/j.svg',
    'jazz': 'logos/band/jazz.svg',
    'instruments': 'logos/band/instruments.svg',
    'full': 'logos/band/full.svg',
} as const

export type Form = keyof typeof forms

export const colors = Object.entries(vars.colors)
    .reduce(
        (colorDictionary, [key, value]) => ({
            ...colorDictionary,
            [key]: { backgroundColor: value },
        }),
        {} as Record<Color, { backgroundColor: string }>
    )

const importedForms = Object.entries(forms)
    .reduce(
        (formDictrionary, [form, imageSrc]) => ({
            ...formDictrionary,
            [form]: {
                maskImage: `url(${imageSrc})`,
            },
        }),
        {} as Record<Form, { maskImage: string }>
    )

export const mask = recipe({
    base: {
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        maskPosition: 'center',
    },
    variants: {
        form: { ...importedForms },
        color: { ...colors }
    }
})
