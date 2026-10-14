import { useEffect, useState } from 'react'
import { Container } from '@/shared/ui'
import { getBanners } from '../../api/homeApi'

export function PromoBanner() {
	const [banner, setBanner] = useState(null)

	useEffect(() => {
		getBanners().then((data) => setBanner(data.wide))
	}, [])

	if (!banner) return null

	return (
		<section data-section='promo-banner' className='py-8'>
			<Container>
				<a href='#' className='flex h-28 items-center justify-center bg-primary text-sm tracking-[0.3em] text-white uppercase'>
					{banner.title}
				</a>
			</Container>
		</section>
	)
}
