import { useEffect, useState } from 'react'
import { Container } from '@/shared/ui'
import { getSeo } from '../../api/homeApi'

export function SeoText() {
	const [seo, setSeo] = useState(null)

	useEffect(() => {
		getSeo().then((data) => setSeo(data))
	}, [])

	if (!seo) return null

	return (
		<section data-section='seo-text' className='py-12'>
			<Container className='relative grid items-start gap-8 lg:grid-cols-2'>
				<div className='absolute top-24 right-4 bottom-0 left-[20%] hidden bg-accent lg:block' />

				<img src={seo.image} alt={seo.title} className='relative w-full object-cover' />

				<div className='relative'>
					<h2 className='mb-16 text-2xl font-bold'>{seo.title}</h2>
					<div className='space-y-4 bg-accent p-8 text-sm text-white lg:bg-transparent lg:p-0 lg:pr-8 lg:pb-8'>
						{seo.paragraphs.map((text, index) => (
							<p key={index}>{text}</p>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
