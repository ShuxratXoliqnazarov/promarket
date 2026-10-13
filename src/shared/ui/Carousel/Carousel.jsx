// @shared-ui: карусель со стрелками (баннер, хиты, акции, статьи)
export function Carousel({ children }) {
	// TODO: стрелки влево/вправо, точки пагинации
	return <div className='flex gap-4 overflow-hidden'>{children}</div>
}
