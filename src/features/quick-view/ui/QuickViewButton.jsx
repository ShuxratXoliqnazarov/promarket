export function QuickViewButton({ product }) {
	function handleClick() {
		alert(product.title)
	}

	return (
		<button
			onClick={handleClick}
			className='bg-primary/80 px-4 py-2 text-[10px] font-semibold text-white uppercase hover:bg-primary'
		>
			Быстрый просмотр
		</button>
	)
}
