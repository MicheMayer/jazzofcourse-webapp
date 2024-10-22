import { sprinkles } from '@styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const container = sprinkles({
    color: 'textDefault',
    backgroundColor: 'white',
})

export const spaceImage = style({
    height: '25em',
})

export const paragraph = sprinkles({
    paddingTop: { xs: 'xs', md: 'sm', lg: 'md'},
    textAlign: 'justify',
})
