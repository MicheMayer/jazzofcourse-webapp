import { sprinkles } from '@styles'
import { style } from '@vanilla-extract/css'

export const eventItem = style([
  {
    cursor: 'pointer',
  },
  sprinkles({
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    gap: 'lg',
    boxShadow: 'sm',
    padding: { xs: 'sm', lg: 'lg'},
  })
])


export const heroImage = sprinkles({
  width: { xs: 'full', lg: 'auto' },
  maxWidth: { xs: 'full', lg: 'xs' },
  height: { xs: 'auto', lg: 'full' },
  objectFit: 'cover',
})

export const content = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 'sm', md: 'md'},
})

export const title = sprinkles({
  marginBottom: { xs: 'xs', lg: 'lg'},
})