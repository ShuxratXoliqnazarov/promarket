export function Rating({ value }) {
	const stars = [1, 2, 3, 4, 5]

	return (
		<div className='flex text-sm'>
			{stars.map((star) => (
				<span key={star} className={star <= value ? 'text-hit' : 'text-gray-300'}>
					★
				</span>
			))}
		</div>
	)
}
