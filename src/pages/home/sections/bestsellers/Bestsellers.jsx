import { useEffect, useState } from 'react'
import { getProducts } from '@/entities/product'
import { Container } from '@/shared/ui'
import { ProductSlider } from '@/widgets/product-slider'

export function Bestsellers() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts().then((data) => setProducts(data))
	}, [])

	const hits = products.filter((product) => product.isHit)

	return (
		<section data-section='bestsellers' className='py-8'>
			<Container>
				<ProductSlider title='Хиты продаж' products={hits} />
			</Container>
		</section>
	)
}
