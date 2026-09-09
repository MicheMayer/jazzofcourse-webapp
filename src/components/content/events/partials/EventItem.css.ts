import { sprinkles, vars } from '@michemayer/vanilla-extract-styles'
import { style } from '@vanilla-extract/css'

export const eventItem = style([
  {
    cursor: 'pointer',
    alignItems: 'stretch',
  },
  sprinkles({
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    gap: 'lg',
    boxShadow: { default: 'xs', hover: 'sm' },
    padding: 'md',
  })
])

export const heroImageWrapper = style({
  height: '20rem',
  '@media': {
    [`screen and (min-width: ${vars.breakpoints.lg})`]: {
      height: 'auto',
      flex: 1,
    },
  },
})

export const heroImage = sprinkles({
  width: 'full',
  height: 'full',
})

export const content = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 'xs', md: 'sm' },
  }),
  {
    '@media': {
      [`screen and (min-width: ${vars.breakpoints.lg})`]: {
        flex: 2,
        minHeight: '16em'
      },
    },
  },
])

export const title = style([
  {
    wordWrap: 'break-word',
  },
  sprinkles({
    marginBottom: { xs: 'xs', lg: 'lg' },
    fontWeight: 'bold',
    textDecoration: { hover: 'underline' },
  }),
])

export const description = style({
  wordWrap: 'break-word',
})

export const date = sprinkles({
  fontWeight: 'bold',
})

export const location = sprinkles({
  marginTop: 'auto',
})