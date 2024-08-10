import { createThemeContract } from '@vanilla-extract/css'

const propeties = {
    primaryFontFamily: '',
    secondaryFontFamily: '',
}

export type TypographyContract = typeof propeties;
export const typographyContract = createThemeContract(propeties)
