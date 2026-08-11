import { style } from '@vanilla-extract/css'
import { sprinkles } from '@michemayer/vanilla-extract-styles'

export const footer = sprinkles({
  color: 'textLight',
  backgroundColor: 'primaryOneDefault',
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
    gap: { xs: 'sm', md: 'lg' },
  })
])

export const legalInfo = sprinkles({
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'center',
  justifyContent: 'center',
  gap: { xs: 'sm', md: 'lg' },
  marginY: { xs: 'sm', md: 'md' },
})

export const legalLink = style([
  {
    cursor: 'pointer',
  },
  sprinkles({
    textDecoration: { hover: 'underline' },
  }),
])