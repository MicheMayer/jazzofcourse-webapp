import { sprinkles, vars } from '@styles'
import { style } from '@vanilla-extract/css'

export const fullscreen = sprinkles({
    height: 'screen',
})

export const typography = style({
    color: vars.colors.textLight,
})
