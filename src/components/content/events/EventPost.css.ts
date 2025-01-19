import { style } from '@vanilla-extract/css'
import { sprinkles } from '@styles'

export const contentArea = sprinkles({
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
        wordWrap: 'break-word',
    },
    sprinkles({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 'xs', lg: 'sm' },
        fontSize: { xs: '4xl', lg: '5xl' },
        color: 'white',
        textAlign: 'center',
    }),
])

export const title = sprinkles({
    marginBottom: { xs: 'sm', lg: 'md' },
})

export const weblink = style([
    {
        whiteSpace: 'nowrap',
        cursor: 'pointer',
    },
    sprinkles({
        display: 'block',
        marginBottom: { xs: 'xs', lg: 'sm' },
    }),
])

export const weblinkIcon = style({
    display: 'inline-block',
    height: '1.5rem',
    width: '1.5rem',
    verticalAlign: 'middle',
})