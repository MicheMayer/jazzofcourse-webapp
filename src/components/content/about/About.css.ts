import { sprinkles } from '@michemayer/vanilla-extract-styles'

export const container = sprinkles({
    color: 'textDefault',
    backgroundColor: 'white',
})

export const paragraph = sprinkles({
    paddingTop: { xs: 'xs', md: 'sm', lg: 'md'},
    textAlign: 'justify',
})
