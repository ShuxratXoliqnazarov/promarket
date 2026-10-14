export function CollectionCard({ collection }) {
	return (
		<a href='#' className='group relative block h-full min-h-48 overflow-hidden'>
			<img
				src={collection.image}
				alt={collection.name}
				className='absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105'
			/>
			<div className='absolute bottom-0 left-0 text-white'>
				<p className='inline-block bg-accent px-3 py-1 font-semibold'>{collection.name}</p>
				<p className='bg-black/30 px-3 py-1 text-xs'>{collection.brand}</p>
			</div>
		</a>
	)
}
