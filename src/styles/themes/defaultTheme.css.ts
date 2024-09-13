import { createTheme } from '@vanilla-extract/css'
import { colors as globalColors } from '@styles/properties/colors.property'
import { createTintAndShades } from '@styles/properties/colors.property'
import type { ColorContract } from '@styles/contracts/color.contract.css'
import { colorContract } from '@styles/contracts/color.contract.css'
import type { TypographyContract } from '@styles/contracts/typography.contract.css'
import { typographyContract } from '@styles/contracts/typography.contract.css'
import type { FontFamily } from '@styles/properties/font-faces.property'

/**
 * Theme exclusive colors
 *
 * For simplicity and maintainability, only a subset is used within the theme.
 */
export const colors = {
  ...createTintAndShades({ baseline: '#003b5e', name: 'blueOne' }),
  ...createTintAndShades({ baseline: '#55b7f0', name: 'lightBlue' }),
  ...createTintAndShades({ baseline: '#1a6694', name: 'blueTwo' }),
  ...createTintAndShades({ baseline: '#eaeaef', name: 'ivory' }),
  ...createTintAndShades({ baseline: '#9e2a2f', name: 'rust' }),
  ...createTintAndShades({ baseline: '#c1b2ad', name: 'sand' }),
  ...createTintAndShades({ baseline: '#b4cdb4', name: 'sage' }),
  ...createTintAndShades({ baseline: '#ffac00', name: 'sun' }),
} as const

export const colorProperties = {
  primaryOneDefault: colors.blueOne100,
  primaryOneLight: colors.blueOne080,
  primaryOneDark: colors.blueOne120,

  primaryTwoDefault: colors.lightBlue100,
  primaryTwoLight: colors.lightBlue090,
  primaryTwoDark: colors.lightBlue130,

  primaryThreeDefault: colors.blueTwo100,
  primaryThreeLight: colors.blueTwo070,
  primaryThreeDark: colors.blueTwo130,

  secondaryDefault: colors.ivory120,
  secondaryLight: colors.ivory090,
  secondaryDark: colors.ivory140,

  textDefault: globalColors.graphite100,
  textLight: globalColors.graphite060,
  textDark: globalColors.graphite140,

  dangerDefault: colors.rust100,
  dangerLight: colors.rust060,
  dangerDark: colors.rust140,

  successDefault: colors.sage130,
  successLight: colors.sage060,
  successDark: colors.sage140,

  warningDefault: colors.sun100,
  warningLight: colors.sun060,
  warningDark: colors.sun140,
} satisfies ColorContract;

export const typographyProperties = {
  primaryFontFamily: 'Bookman Old Style',
  secondaryFontFamily: 'Harlow Solid',
} satisfies TypographyContract;

export const themeClass = createTheme(
  {
    colors: colorContract,
    typography: typographyContract,
  },
  {
    colors: colorProperties,
    typography: typographyProperties,
  }
);