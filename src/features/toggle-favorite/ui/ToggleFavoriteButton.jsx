import { useState } from 'react'
import { Heart } from 'lucide-react'

export function ToggleFavoriteButton() {
	const [isFavorite, setIsFavorite] = useState(false)

	return (
		<button onClick={() => setIsFavorite(!isFavorite)} className='text-primary'>
			<Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
		</button>
	)
}
