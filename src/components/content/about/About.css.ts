import { sprinkles } from '@michemayer/vanilla-extract-styles'

export const container = sprinkles({
    color: 'textDefault',
    backgroundColor: 'secondaryLight',
})

export const paragraph = sprinkles({
    paddingTop: { xs: 'xs', md: 'sm', lg: 'md'},
    textAlign: 'justify',
})
