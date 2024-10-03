import { style } from '@vanilla-extract/css'
import { sprinkles, vars } from '@styles'

export const container = sprinkles({
    display: 'flex',
    flexDirection: 'column',
    width: 'full',
})

export const greeting = sprinkles({
    paddingY: 'xl',
    textAlign: 'center',
    fontSize: 'lg',
})

export const playButton = style([
    {
        display: 'flex',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: vars.spaces.lg,
        borderColor: vars.colors.white,
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
