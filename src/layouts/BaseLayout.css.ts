import { style } from '@vanilla-extract/css'
import { sprinkles, vars } from '@styles'

export const typography = sprinkles({
    fontFamily: 'primary',
})

export const colors = style({
    backgroundColor: vars.colors.primaryOneDefault,
    color: vars.colors.textDefault,
})

export const makeItWide = style({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
})

export const spreadItOut = style({
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'nowrap',
    width: '100%',
})