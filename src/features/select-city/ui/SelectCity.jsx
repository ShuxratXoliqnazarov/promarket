import { useState } from 'react'
import { MapPin } from 'lucide-react'

const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург']

export function SelectCity() {
	const [city, setCity] = useState('Москва')
	const [isOpen, setIsOpen] = useState(false)

	function handleSelect(newCity) {
		setCity(newCity)
		setIsOpen(false)
	}

	return (
		<div className='relative'>
			<button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-1 text-xs text-primary'>
				<MapPin size={14} className='text-hit' />
				<span className='border-b border-dashed'>{city}</span>
			</button>

			{isOpen && (
				<ul className='absolute top-6 left-0 z-20 w-44 bg-white py-2 shadow-lg'>
					{cities.map((item) => (
						<li key={item}>
							<button onClick={() => handleSelect(item)} className='w-full px-4 py-1 text-left text-sm hover:bg-page'>
								{item}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
