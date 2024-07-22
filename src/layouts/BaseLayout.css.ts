import { style } from '@vanilla-extract/css';
import { vars } from '../themes/defaultTheme.css.ts';

export const color = style({
	backgroundColor: vars.color.bgDark,
	color: vars.color.textLight,
});

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