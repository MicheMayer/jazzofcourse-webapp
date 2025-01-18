import { style } from '@vanilla-extract/css'
import { sprinkles } from '@styles'

export const container = sprinkles({
    color: 'textDefault',
    backgroundColor: 'white',
})

export const banner = style([
    {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50vh',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    },
])

export const infoBox = style([
    {
        textShadow: '1px 1px 2px black',
    },
    sprinkles({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 'xs', lg: 'sm' },
        fontSize: { xs: '2xl', lg: '5xl' },
        color: 'white',
        textAlign: 'center',
    }),
])

export const weblink = style({
    whiteSpace: 'nowrap',
    cursor: 'pointer',
})

export const weblinkIcon = style({
    display: 'inline-block',
    height: '1.5rem',
    width: '1.5rem',
    verticalAlign: 'middle',
})