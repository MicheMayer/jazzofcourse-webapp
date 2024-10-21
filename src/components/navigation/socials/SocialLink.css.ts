import { sprinkles } from '@styles';
import { style } from '@vanilla-extract/css'

export const container = style([
    {},
    sprinkles({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 'xs',
    }),
])

export const icon = style({
    width: '1.5em',
    height: '1.5em',
})