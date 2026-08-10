import type { FontFace } from '@michemayer/vanilla-extract-styles'

export type FontFamily = 'Bookman Old Style' | 'Harlow Solid'

export const fontFamilies = {
    bookmanOldStyle: 'Bookman Old Style',
    harlowSolid: 'Harlow Solid',
} as const satisfies Record<string, FontFamily>

/** 
 * Object with all available font-faces and their metadata
 */
export const fontFaces: FontFace[] = [
    {
        fontFamily: fontFamilies.bookmanOldStyle,
        src: '/fonts/bookman_old_style/bookman_old_style.ttf',
        fontWeight: 'normal',
        fontStyle: 'normal',
        preload: true,
    },
    {
        fontFamily: fontFamilies.bookmanOldStyle,
        src: '/fonts/bookman_old_style/bookman_old_style-italic.ttf',
        fontWeight: 'normal',
        fontStyle: 'italic',
    },
    {
        fontFamily: fontFamilies.bookmanOldStyle,
        src: '/fonts/bookman_old_style/bookman_old_style-bold.ttf',
        fontWeight: 'bold',
        fontStyle: 'normal',
    },
    {
        fontFamily: fontFamilies.bookmanOldStyle,
        src: '/fonts/bookman_old_style/bookman_old_style-bold_italic.ttf',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    {
        fontFamily: fontFamilies.harlowSolid,
        src: '/fonts/harlow/harlow-solid.ttf',
        fontWeight: 'normal',
        fontStyle: 'normal',
        preload: true,
    },
] as const