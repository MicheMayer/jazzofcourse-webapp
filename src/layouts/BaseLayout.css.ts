import { style } from '@vanilla-extract/css'
import { sprinkles, vars } from '@styles'

export const wrapper = style([
    {
    },
    sprinkles({
        fontFamily: 'primary',
        backgroundColor: 'primaryOneDefault',
        color: 'textDefault',
    })
])