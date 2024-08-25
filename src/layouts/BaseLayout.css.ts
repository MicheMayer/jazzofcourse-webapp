import { style } from '@vanilla-extract/css';
import styles from '@styles/.';

export const color = style({
	backgroundColor: styles.vars.colors.primaryOneDefault,
	color: styles.vars.colors.textLight,
});

export const makeItWide = style({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
})

export const spreadItOut = style({
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'nowrap',
    width: '100%',
})