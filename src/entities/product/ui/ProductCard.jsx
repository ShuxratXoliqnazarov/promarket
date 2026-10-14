import { formatPrice } from '@/shared/lib'
import { Badge, Rating } from '@/shared/ui'

export function ProductCard({
	product,
	favoriteButton,
	quickViewButton,
	cartButton,
}) {
	return (
		<div className='group relative flex h-full flex-col bg-white p-4'>
			<div className='flex items-start justify-between'>
				<div className='flex gap-1'>
					{product.isHit && <Badge className='bg-hit'>Хит</Badge>}
					{product.oldPrice && (
						<Badge className='bg-sale text-white'>Акция</Badge>
					)}
				</div>
				{favoriteButton}
			</div>

			<div className='relative my-4'>
				<img
					src={product.image}
					alt={product.title}
					className='mx-auto h-44 object-contain'
				/>
				<div className='absolute inset-x-0 bottom-4 flex justify-center opacity-0 transition group-hover:opacity-100'>
					{quickViewButton}
				</div>
			</div>

			<div className='mb-2 flex items-center gap-2'>
				<Rating value={product.rating} />
				<span className='text-xs text-gray-400'>{product.reviews}</span>
			</div>

			<h3 className='mb-4 line-clamp-3 text-xs'>{product.title}</h3>
			<p className='mt-auto mb-2 text-xs text-gray-500'>{product.country}</p>

			<div className='flex items-end justify-between gap-2'>
				<div>
					<p className='text-lg font-bold'>{formatPrice(product.price)}</p>
					{product.oldPrice && (
						<p className='text-xs font-semibold text-sale line-through'>
							{formatPrice(product.oldPrice)}
						</p>
					)}
				</div>
				{cartButton}
			</div>
		</div>
	)
}
