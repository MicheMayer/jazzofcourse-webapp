import { style } from '@vanilla-extract/css'
import '../styles/global.css'

export const BgDark = style({
    backgroundColor: '#1a1a1a',
})

export const MakeItWide = style({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
})

export const SpreadItOut = style({
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'nowrap',
    width: '100%',
})