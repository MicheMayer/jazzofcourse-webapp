import { style } from '@vanilla-extract/css'
import { sprinkles, vars } from '@styles'

export const container = sprinkles({
    display: 'flex',
    flexDirection: 'column',
    width: 'full',
})

export const intro = sprinkles({
    paddingY: 'xl',
    textAlign: 'center',
    fontSize: 'xl',
    fontWeight: 'bold',
})

export const link = style([
    {
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
        marginX: 'auto',
        fontSize: 'lg',
        fontWeight: 'bold',
        padding: 'sm',
    })
])
