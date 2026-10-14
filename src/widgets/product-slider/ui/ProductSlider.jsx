import { useEffect, useState } from 'react'
import { AddToCartButton } from '@/features/add-to-cart'
import { CategoryTabs } from '@/features/filter-by-category'
import { QuickViewButton } from '@/features/quick-view'
import { ToggleFavoriteButton } from '@/features/toggle-favorite'
import { getCategories } from '@/entities/category'
import { ProductCard } from '@/entities/product'
import { Carousel, SectionTitle } from '@/shared/ui'

export function ProductSlider({ title, products }) {
	const [categories, setCategories] = useState([])
	const [active, setActive] = useState('all')

	useEffect(() => {
		getCategories().then((data) => setCategories(data))
	}, [])

	const usedCategories = categories.filter((category) =>
		products.some((product) => product.category === category.id),
	)
	const tabs = [{ id: 'all', name: 'Любые товары' }, ...usedCategories]

	const filteredProducts =
		active === 'all' ? products : products.filter((product) => product.category === active)

	return (
		<div>
			<SectionTitle>{title}</SectionTitle>
			<CategoryTabs tabs={tabs} active={active} onChange={setActive} />

			<Carousel
				key={active}
				items={filteredProducts}
				renderItem={(product) => (
					<ProductCard
						product={product}
						favoriteButton={<ToggleFavoriteButton />}
						quickViewButton={<QuickViewButton product={product} />}
						cartButton={<AddToCartButton />}
					/>
				)}
			/>
		</div>
	)
}
