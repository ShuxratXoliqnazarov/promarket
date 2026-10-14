import { useEffect, useState } from 'react'
import { CollectionCard, getCollections } from '@/entities/collection'
import { Container, SectionTitle } from '@/shared/ui'

export function TileCollections() {
	const [collections, setCollections] = useState([])

	useEffect(() => {
		getCollections().then((data) => setCollections(data))
	}, [])

	return (
		<section data-section='tile-collections' className='py-8'>
			<Container>
				<SectionTitle>Коллекции плитки</SectionTitle>

				<div className='grid gap-2 md:grid-cols-4 md:grid-rows-2 lg:h-125'>
					{collections.map((collection, index) => (
						<div key={collection.id} className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
							<CollectionCard collection={collection} />
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
