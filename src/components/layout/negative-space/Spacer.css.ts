import { recipe } from '@vanilla-extract/recipes'

const sizes = [10, 25, 50, 75, 100]

export type SpacerSize = 10 | 25 | 50 | 75 | 100

export const sizeVariants = sizes
    .reduce(
        (sizeDictionary, size) => ({
            ...sizeDictionary,
            [size]: { minHeight: `${size}vh` },
        }),
        {} as Record<SpacerSize, { minHeight: string }>
    )

export const spacer = recipe({
    base: {
        width: '100%',
    },
    variants: {
        size: {
            ...sizeVariants,
        },
    },
})