// @shared-ui: заголовок секции («Хиты продаж», «Акции», «Статьи»…)
export function SectionTitle({ children }) {
	return <h2 className='mb-6 text-2xl font-bold'>{children}</h2>
}
