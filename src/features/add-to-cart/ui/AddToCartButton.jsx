import { useState } from 'react'

export function AddToCartButton() {
	const [isAdded, setIsAdded] = useState(false)

	return (
		<button
			onClick={() => setIsAdded(!isAdded)}
			className={`rounded-sm border border-primary px-3 py-1.5 text-[10px] font-semibold uppercase transition ${
				isAdded ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:text-white'
			}`}
		>
			{isAdded ? 'В корзине' : 'В корзину'}
		</button>
	)
}
