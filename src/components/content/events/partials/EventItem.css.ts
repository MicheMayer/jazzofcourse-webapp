import { sprinkles } from '@styles'
import { style } from '@vanilla-extract/css'

export const eventItem = style([
  sprinkles({
    display: 'flex',
    flexDirection: { xs: 'row', md: 'column' },
    boxShadow: 'sm',
    padding: 'lg',
  }),
])