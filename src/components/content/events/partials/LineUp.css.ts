import { sprinkles } from '@michemayer/vanilla-extract-styles'
import { style } from '@vanilla-extract/css'

export const title = style([
    {
        wordWrap: 'break-word',
    },
    sprinkles({
        marginY: { xs: 'xs', lg: 'sm' },
        fontWeight: 'bold',
    }),
])

export const list = style([
    {
        listStyleType: 'none',
        listStylePosition: 'inside',
    },
    sprinkles({
        display: 'flex',
        flexDirection: 'column',
    }),
])