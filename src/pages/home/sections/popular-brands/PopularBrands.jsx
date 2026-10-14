import { useEffect, useState } from 'react'
import { BrandCard, getBrands } from '@/entities/brand'
import { Container, SectionTitle } from '@/shared/ui'

export function PopularBrands() {
	const [brands, setBrands] = useState([])

	useEffect(() => {
		getBrands().then((data) => setBrands(data))
	}, [])

	return (
		<section data-section='popular-brands' className='py-8'>
			<Container>
				<SectionTitle>Популярные бренды</SectionTitle>

				<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
					{brands.map((brand) => (
						<BrandCard key={brand.id} brand={brand} />
					))}
				</div>
			</Container>
		</section>
	)
}
