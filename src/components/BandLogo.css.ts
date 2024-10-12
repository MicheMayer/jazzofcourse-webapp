import { vars } from '@styles'
import type { Color } from '@styles'
import { recipe } from '@vanilla-extract/recipes'
import { getImage } from 'astro:assets'
import j from '@assets/logos/band/j.svg'
import jazz from '@assets/logos/band/jazz.svg'
import instruments from '@assets/logos/band/instruments.svg'
import full from '@assets/logos/band/full.svg'

const forms = {
    'j': j,
    'jazz': jazz,
    'instruments': instruments,
    'full': full,
} as const

export type Form = keyof typeof forms

export const colors = Object.entries(vars.colors)
    .reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: { backgroundColor: value },
        }),
        {} as Record<Color, { backgroundColor: string }>
    )

const importedForms = await Object.entries(forms)
    .reduce(
        async (previousPromise, [form, imageMetaData]) => {
            let acc = await previousPromise
            const image = await getImage({src: imageMetaData, format: 'svg'})
            
            return {
            ...acc,
            [form]: {
                maskImage: `url(${image.src})`,
            },
        }},
        Promise.resolve({} as Record<Form, { maskImage: string }>)
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
