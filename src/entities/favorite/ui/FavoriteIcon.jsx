import { Heart } from 'lucide-react'

export function FavoriteIcon({ count }) {
	return (
		<a href='#' className='relative text-primary'>
			<Heart size={24} />
			{count > 0 && (
				<span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-hit text-[10px] font-bold text-black'>
					{count}
				</span>
			)}
		</a>
	)
}
