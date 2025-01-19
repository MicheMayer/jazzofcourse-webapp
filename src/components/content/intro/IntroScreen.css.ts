import { sprinkles, vars } from '@styles'
import { style, createContainer } from '@vanilla-extract/css'

export const fullscreen = sprinkles({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'screen',
})

export const backgroundVideo = style({
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.7) blur(1px)',
})

export const typography = style({
    color: vars.colors.white,
    containerName: createContainer(),
    containerType: 'inline-size',
})

export const introContent = style([
    {
        width: '100%',
        flexGrow: 1,
        display: 'grid',
        columnGap: 'initial',
        alignItems: 'center',
        gridTemplateColumns: 'auto',
        '@container': {
            '(width > 768px)': {
                flexGrow: 0,
                gridTemplateColumns: '1fr 1fr',
            }
        },
    },
])

export const eventQuickLink = sprinkles({
    display: { xs: 'none', md: 'block' },
})

export const bandLogo = style([
    {
        height: '30vh',
    },
    sprinkles({
        width: 'full',
        marginY: { xs: 'lg', md: 'xl', lg: '4xl'},
        marginX: 'auto',
    })
])