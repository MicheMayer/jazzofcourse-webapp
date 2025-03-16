import { style } from "@vanilla-extract/css"

export const imageContainer = style({
    overflow: 'hidden',
})

export const image = style({
    objectFit: 'cover',
    transition: 'transform .5s ease',
    ':hover': {
        transform: 'scale(1.1)',
    },
})