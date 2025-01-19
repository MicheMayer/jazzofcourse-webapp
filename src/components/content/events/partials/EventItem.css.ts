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
  gap: { xs: 'xs', md: 'sm'},
})

export const title = style([
  {
    wordWrap: 'break-word',
  },
  sprinkles({
    marginBottom: { xs: 'xs', lg: 'lg'},
    fontWeight: 'bold',
  }),
])

export const description = style({
  wordWrap: 'break-word',
})

export const date = sprinkles({
  fontWeight: 'bold',
})