export default function Container({
	children,
	width = 1400,
	className,
}: {
	children: React.ReactNode[] | React.ReactNode
	width?: number
	className?: string
}) {
	return (
		<div
			className={className}
			style={{
				maxWidth: width,
				marginLeft: 'auto',
				marginRight: 'auto',
				paddingLeft: 20,
				paddingRight: 20,
			}}
		>
			{children}
		</div>
	)
}