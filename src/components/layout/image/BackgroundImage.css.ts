import { recipe } from "@vanilla-extract/recipes"

export const backgroundImage = recipe({
    base: {
        width: '100%',
        objectPosition: 'center',
        height: '100%',
    },
    variants: {
        objectFit: {
            contain: {
                objectFit: 'contain',
            },
            cover: {
                objectFit: 'cover',
            },
        },
    },
    defaultVariants: {
        objectFit: 'cover',
    }
})