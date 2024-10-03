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
    fontSize: 'lg',
})

export const link = style([
    {
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: vars.spaces.lg,
        borderColor: vars.colors.white,
    },
    sprinkles({
       marginX: 'auto',
       fontSize: 'lg',
       fontWeight: 'bold',
       padding: 'sm',
   })
])
