import { HeroBanner } from '../sections/hero-banner'
import { Advantages } from '../sections/advantages'
import { TileCollections } from '../sections/tile-collections'
import { Bestsellers } from '../sections/bestsellers'
import { Promotions } from '../sections/promotions'
import { PromoBanner } from '../sections/promo-banner'
import { PopularBrands } from '../sections/popular-brands'
import { Articles } from '../sections/articles'
import { SeoText } from '../sections/seo-text'

/**
 * @page: Главная
 * Секции идут в том же порядке, что и в макете Figma (сверху вниз)
 */
export function HomePage() {
	return (
		<main>
			<HeroBanner /> {/* Главный баннер */}
			<Advantages /> {/* Преимущества */}
			<TileCollections /> {/* Коллекции плитки */}
			<Bestsellers /> {/* Хиты продаж */}
			<Promotions /> {/* Акции */}
			<PromoBanner /> {/* Промо-баннер */}
			<PopularBrands /> {/* Популярные бренды */}
			<Articles /> {/* Статьи */}
			<SeoText /> {/* SEO-текст */}
		</main>
	)
}
