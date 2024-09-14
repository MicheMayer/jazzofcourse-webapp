import { style } from "@vanilla-extract/css"

export const backgroundImage = style({
    position: 'absolute',
    top: 0,
    width: '100%',
    minHeight: '100vh',
    objectFit: 'cover',
})