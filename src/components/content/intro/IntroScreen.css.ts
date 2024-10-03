import { sprinkles, vars } from '@styles'
import { style, createContainer } from '@vanilla-extract/css'

export const fullscreen = sprinkles({
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'screen',
})

export const backgroundVideo = style({
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.3) blur(2px)',
})

export const typography = style({
    color: vars.colors.white,
    containerName: createContainer(),
    containerType: 'inline-size',
})

export const introContent = style({
    width: '100%',
    display: 'grid',
    columnGap: 'initial',
    alignItems: 'flex-end',
    gridTemplateColumns: 'auto',
    '@container': {
        '(width > 768px)': {
            gridTemplateColumns: '1fr 1fr'
        }
    }
})

export const bandLogo = style({
    width: '50%',
    marginTop: '5em',
    marginBottom: '5em',
    marginLeft: 'auto',
    marginRight: 'auto',
})