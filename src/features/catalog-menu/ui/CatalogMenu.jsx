import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getCategories } from '@/entities/category'

export function CatalogMenu() {
	const [categories, setCategories] = useState([])
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		getCategories().then((data) => setCategories(data))
	}, [])

	return (
		<div className='relative'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex h-10 items-center gap-3 bg-primary-dark px-5 text-xs font-semibold text-white uppercase'
			>
				{isOpen ? <X size={18} /> : <Menu size={18} />}
				Каталог товаров
			</button>

			{isOpen && (
				<ul className='absolute top-10 left-0 z-20 w-64 bg-white py-2 shadow-lg'>
					{categories.map((category) => (
						<li key={category.id}>
							<a href='#' className='block px-5 py-2 text-sm hover:bg-page hover:text-primary'>
								{category.name}
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
