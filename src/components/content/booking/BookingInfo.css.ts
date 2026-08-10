import { style } from '@vanilla-extract/css'
import { sprinkles, vars } from '@michemayer/vanilla-extract-styles'

export const container = sprinkles({
    minHeight: 'screen',
    backgroundColor: 'white',
    color: 'textDefault',
})

export const splitView = sprinkles({
    display: { xs: 'block', lg: 'flex' },
    alignItems: 'stretch',
    gap: 'xl',
})

export const textColumn = style({
    flex: '1 1 55%',
    minWidth: 0,
},
sprinkles({
    paddingY: '2xl',
})
)

export const paragraph = sprinkles({
    paddingTop: { xs: 'xs', md: 'sm', lg: 'md' },
    textAlign: 'justify',
})

export const subHeading = sprinkles({
    paddingTop: { xs: 'lg', md: 'xl' },
})

export const lineup = style([
    sprinkles({
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'xs',
        paddingTop: { xs: 'xs', md: 'sm' },
    }),
    {
        listStyle: 'none',
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
    },
])

export const lineupItem = style([
    sprinkles({
        fontWeight: 'bold',
        fontSize: 'sm'
    }),
    {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: vars.colors.black,
        borderRadius: vars.spaces.lg,
        padding: `${vars.spaces['3xs']} ${vars.spaces.sm}`,
    },
])

export const impression = style([
    sprinkles({
        display: { xs: 'none', lg: 'block' },
    }),
    {
        position: 'relative',
        flex: '1 1 45%',
        overflow: 'hidden',
    },
])

export const impressionImage = style({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
})

export const impressionFade = style({
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to right, ${vars.colors.white} 0%, rgba(255, 255, 255, 0) 70%)`,
})

export const contactButton = sprinkles({
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'xl',
})

export const button = style([
    {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: vars.spaces.lg,
        borderColor: vars.colors.black,
        backgroundColor: 'transparent',
        opacity: 0.8,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in-out',
        ':hover': {
            opacity: 1.0,
        },
    },
    sprinkles({
        fontSize: 'lg',
        fontWeight: 'bold',
        padding: 'sm',
        color: 'black',
    }),
])