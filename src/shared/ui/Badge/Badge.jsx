// @shared-ui: бейдж «ХИТ» / «АКЦИЯ»
export function Badge({ children, className = '' }) {
	return <span className={`rounded px-2 py-0.5 text-xs font-bold ${className}`}>{children}</span>
}
