import { style } from '@vanilla-extract/css'
import { vars } from '@styles'

export const color = style({
    backgroundColor: vars.colors.primaryOneDefault,
    color: vars.colors.textLight,
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