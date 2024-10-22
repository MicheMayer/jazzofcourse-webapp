import { style } from '@vanilla-extract/css'
import { sprinkles } from '@styles'

export const footer = sprinkles({
  color: 'textLight',
  textAlign: 'center',
  paddingY: 'lg',
})

export const copyrightDisclaimer = sprinkles({
  fontSize: 'sm',
  paddingY: 'md',
})

export const socialLinks = style([
  sprinkles({
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'lg',
  })
])