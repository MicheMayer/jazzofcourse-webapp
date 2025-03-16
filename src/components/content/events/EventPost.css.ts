import { style } from '@vanilla-extract/css'
import { sprinkles } from '@styles'

export const contentArea = sprinkles({
    color: 'textDefault',
    backgroundColor: 'white',
})

export const banner =
    sprinkles({
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'screen',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    })

export const bannerOverlayText = style([
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

export const infoDetails = sprinkles({
    width: 'full',
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    alignItems: { xs: 'flex-start', lg: 'center' },
    gap: { xs: 'xs', md: 'md', lg: 'lg' },
    marginBottom: { xs: 'md', lg: 'lg' },
})

export const weblink = style({
    cursor: 'pointer',
})