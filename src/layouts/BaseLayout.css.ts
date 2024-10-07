import { style } from '@vanilla-extract/css'
import { sprinkles, vars } from '@styles'

export const typography = sprinkles({
    fontFamily: 'primary',
})

export const colors = style({
    backgroundColor: vars.colors.primaryOneDefault,
    color: vars.colors.textDefault,
})