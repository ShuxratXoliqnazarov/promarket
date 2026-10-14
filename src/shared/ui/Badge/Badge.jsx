export function Badge({ children, className = '' }) {
	return (
		<span className={`rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase ${className}`}>
			{children}
		</span>
	)
}
