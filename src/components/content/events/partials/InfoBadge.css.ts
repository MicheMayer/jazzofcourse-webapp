import { style } from '@vanilla-extract/css'
import { sprinkles } from '@styles'

export const wrapper = sprinkles({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 'xs',
})

export const icon = style({
    display: 'inline-block',
    height: '1.5rem',
    width: '1.5rem',
    verticalAlign: 'middle',
})