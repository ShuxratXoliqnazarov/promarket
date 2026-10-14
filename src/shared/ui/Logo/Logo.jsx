// @shared-ui: логотип (шапка, подвал)
// Figma: два навигационных знака «G» (синие скобки) + красный блок «PROMARKET»

function GMark({ className = '' }) {
	return (
		<span
			className={`relative inline-block h-8 w-7 rounded-l-[6px] border-[6px] border-r-0 border-[#004C93] ${className}`}
		>
			<span className='absolute top-1/2 right-0 h-[6px] w-[10px] -translate-y-1/2 bg-[#004C93]' />
		</span>
	)
}

export function Logo({ className = '' }) {
	return (
		<span className={`inline-flex items-center ${className}`}>
			<GMark />
			<GMark className='-ml-0.5' />
			<span className='ml-1 flex h-8 items-center rounded-[4px] bg-[#EA1649] px-2 text-base leading-none font-extrabold tracking-tight text-white'>
				PROMARKET
			</span>
		</span>
	)
}
