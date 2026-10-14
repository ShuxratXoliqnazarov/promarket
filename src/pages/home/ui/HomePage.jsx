import { HeroBanner } from '../sections/hero-banner'
import { Advantages } from '../sections/advantages'
import { TileCollections } from '../sections/tile-collections'
import { Bestsellers } from '../sections/bestsellers'
import { Promotions } from '../sections/promotions'
import { PromoBanner } from '../sections/promo-banner'
import { PopularBrands } from '../sections/popular-brands'
import { Articles } from '../sections/articles'
import { SeoText } from '../sections/seo-text'

export function HomePage() {
	return (
		<main>
			<HeroBanner /> 
			<Advantages /> 
			<TileCollections /> 
			<Bestsellers /> 
			<Promotions /> 
			<PromoBanner /> 
			<PopularBrands /> 
			<Articles /> 
			<SeoText /> 
		</main>
	)
}
