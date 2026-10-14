export function BrandCard({ brand }) {
	return (
		<a
			href='#'
			className='flex h-24 items-center justify-center bg-white px-4 text-center text-lg font-bold text-gray-700 transition hover:shadow-md'
		>
			{brand.name}
		</a>
	)
}
