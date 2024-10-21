import { sprinkles } from '@styles'
import { style } from '@vanilla-extract/css'


export const bar = style([
	{
		height: 'fit-content',
	},
	sprinkles({
		backgroundColor: 'white',
		boxShadow: 'md',
		padding: 'md',
	}),
])

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

export const externalLinks = style([
	{
	},
	sprinkles({
		display: { xs: 'none', md: 'flex' },
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: 'lg',
	})
])

export const bandIcon = style({
	width: '1.5em',
	height: '1.5em',
})