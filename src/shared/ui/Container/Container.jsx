// @shared-ui: обёртка с максимальной шириной контента
export function Container({ children, className = '' }) {
	return <div className={`mx-auto max-w-[1520px] px-4 ${className}`}>{children}</div>
}
