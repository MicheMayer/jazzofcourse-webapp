import { style } from '@vanilla-extract/css'
import { sprinkles, vars } from '@styles'

export const container = sprinkles({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingY: '3xl',
    paddingX: 'sm',
})

export const backgroundVideo = style({
    position: 'absolute',
    height: '100%',
    top: 0,
    bottom: 0,
    objectFit: 'cover',
    backgroundColor: vars.colors.black,
    overflow: 'hidden',
    filter: 'brightness(0.6)',
    border: `3px solid ${vars.colors.black}`,
    borderRadius: vars.spaces.xs,
})

export const foregroundBox = sprinkles({
    padding: 'lg',
})

export const greeting = sprinkles({
    paddingY: 'xl',
    textAlign: 'center',
    fontSize: 'xl',
    fontWeight: 'bold',
})

export const playButton = style([
    {
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: vars.spaces.lg,
        borderColor: vars.colors.white,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: 0.8,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in-out',
        ':hover': {
            opacity: 1.0,
        },
    },
    sprinkles({
        margin: 'auto',
        padding: 'sm',
        fontWeight: 'bold',
        fontSize: 'lg',
    }),
])

export const playIcon = style({
    width: '1.5em',
    fill: 'none',
    stroke: vars.colors.white,
    strokeWidth: '2',
    strokeLinejoin: 'round',
})
