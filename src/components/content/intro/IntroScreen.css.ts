import { sprinkles, vars } from '@styles'
import { style } from '@vanilla-extract/css'

export const fullscreen = sprinkles({
    height: 'screen',
})

export const backgroundVideo = style({
    position: 'relative',
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    filter: 'brightness(0.3)',
})

export const typography = style({
    color: vars.colors.white,
})

export const split = sprinkles({
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 'lg', md: '2xl' },
})

export const heading = style({
    width: '100%',
    textAlign: 'center',
    marginTop: '5rem',
    marginBottom: '5rem',
    fontSize: '6rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontFamily: vars.typography.fonts.secondaryFontFamily,
})