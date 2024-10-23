import { sprinkles, vars } from '@styles'
import { style, keyframes } from '@vanilla-extract/css'

export const bar = sprinkles({
	backgroundColor: 'white',
	padding: 'md',
})

export const nav = sprinkles({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'flex-start',
	alignItems: 'center',
	gap: 'lg',
})

export const logo = style({
	width: 'fit-content',
})

export const internalLinks = style([
	{
		flexGrow: 1,
	},
	sprinkles({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: 'lg',
	})
])

export const externalLinks = sprinkles({
	display: { xs: 'none', md: 'flex' },
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: 'lg',
})

const pulse = keyframes({
	'0%': { transform: 'scale(0.90)' },
	'70%': { transform: 'scale(1)' },
	'100%': { transform: 'scale(0.90)' },
})

export const bandIcon = style({
	width: '1.5em',
	height: '1.5em',
	cursor: 'pointer',
	transform: 'scale(1)',
	borderRadius: '50%',
	padding: '0.5em',
	animationName: pulse,
	animationDuration: '3s',
	animationIterationCount: 'infinite',
})