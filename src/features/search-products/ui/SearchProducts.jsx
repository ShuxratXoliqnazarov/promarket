import { useState } from 'react'
import { Search } from 'lucide-react'

export function SearchProducts() {
	const [query, setQuery] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		console.log('Поиск:', query)
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-1 items-center border border-primary bg-white'>
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Что вы ищете?'
				className='h-10 flex-1 px-4 text-sm outline-none'
			/>
			<button type='submit' className='px-4 text-primary'>
				<Search size={18} />
			</button>
		</form>
	)
}
