import { sprinkles } from '@styles'
import { style } from '@vanilla-extract/css'

export const eventItem = sprinkles({
  display: 'flex',
  flexDirection: { xs: 'column', lg: 'row' },
  gap: 'lg',
  boxShadow: 'sm',
  padding: 'lg',
})

export const heroImage = sprinkles({
  width: { xs: 'full', lg: 'auto' },
  maxWidth: { xs: 'full', lg: 'xs' },
})

export const weblinkIcon = style({
  height: '1.5rem',
  cursor: 'pointer',
})

export const content = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  gap: 'xs',
})