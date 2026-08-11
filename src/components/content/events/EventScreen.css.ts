import { sprinkles } from '@michemayer/vanilla-extract-styles'

export const eventScreen = sprinkles({
    minHeight: 'screen',
    paddingY: '2xl',
    backgroundColor: 'secondaryLight',
})

export const eventList = sprinkles({
    display: 'flex',
    flexDirection: 'column',
    gap: 'lg',
    paddingY: 'lg',
})