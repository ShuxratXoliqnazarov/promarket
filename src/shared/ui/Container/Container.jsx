export function Container({ children, className = '' }) {
	return <div className={`mx-auto max-w-[1540px] px-4 ${className}`}>{children}</div>
}
