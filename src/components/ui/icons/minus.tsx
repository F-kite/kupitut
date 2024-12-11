import type { IconProps } from '@/types/props'

export default function IconMinus({
	className,
	fill = '#fff',
	size = 48,
}: IconProps) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			width={size}
			height={size}
		>
			<path
				d='M6 12L18 12'
				stroke={fill}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
