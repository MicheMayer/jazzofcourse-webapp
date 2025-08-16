import { style } from '@vanilla-extract/css'

export const parallaxImage = style({
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
})

export const defaultSpacer = style({
    minHeight: '100vh',
})
