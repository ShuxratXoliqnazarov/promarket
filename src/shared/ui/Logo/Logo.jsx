// @shared-ui: логотип (шапка, подвал)
// Figma: значок «GG» на малиновом фоне + синий вордмарк «PROMARKET»
export function Logo({ className = '' }) {
	return (
		<span className={`inline-flex items-center gap-2 ${className}`}>
			<span className='flex h-8 items-center rounded-md bg-[#E1063E] px-2 text-lg leading-none font-extrabold tracking-tighter text-white'>
				GG
			</span>
			<span className='text-lg leading-none font-extrabold tracking-tight text-[#00396B]'>
				PROMARKET
			</span>
		</span>
	)
}
