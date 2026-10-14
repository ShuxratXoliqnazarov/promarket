import { useEffect, useState } from 'react'
import { getProducts } from '@/entities/product'
import { Container } from '@/shared/ui'
import { ProductSlider } from '@/widgets/product-slider'

export function Promotions() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getProducts().then((data) => setProducts(data))
	}, [])

	const sales = products.filter((product) => product.oldPrice)

	return (
		<section data-section='promotions' className='bg-[#e8f1fb] py-10'>
			<Container>
				<ProductSlider title='Акции' products={sales} />
			</Container>
		</section>
	)
}
