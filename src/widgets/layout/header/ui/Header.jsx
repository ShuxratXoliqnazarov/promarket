import { useEffect, useState } from 'react'
import { User } from 'lucide-react'
import { CatalogMenu } from '@/features/catalog-menu'
import { RequestCallbackButton } from '@/features/request-callback'
import { SearchProducts } from '@/features/search-products'
import { SelectCity } from '@/features/select-city'
import { CartIcon, getCart } from '@/entities/cart'
import { FavoriteIcon, getFavorites } from '@/entities/favorite'
import { Container, Logo } from '@/shared/ui'

const links = ['Оплата', 'Доставка', 'Поставщикам', 'Статьи', 'Контакты']

export function Header() {
	const [cart, setCart] = useState([])
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
		getCart().then((data) => setCart(data))
		getFavorites().then((data) => setFavorites(data))
	}, [])

	return (
		<header data-section='header' className='bg-white'>
			<Container className='flex flex-wrap items-center justify-between gap-4 py-4'>
				<Logo />
				<SelectCity />

				<div className='flex items-center gap-4'>
					<a href='tel:+74950183210' className='font-semibold'>
						8 495 018-32-10
					</a>
					<RequestCallbackButton />
				</div>

				<nav className='hidden gap-6 lg:flex'>
					{links.map((link) => (
						<a key={link} href='#' className='text-xs text-primary hover:underline'>
							{link}
						</a>
					))}
				</nav>
			</Container>

			<Container className='flex items-center gap-4 pb-4'>
				<div className='flex'>
					<CatalogMenu />
					<a href='#' className='hidden h-10 items-center bg-primary px-5 text-xs font-semibold text-white uppercase md:flex'>
						Акции
					</a>
					<a href='#' className='hidden h-10 items-center bg-primary px-5 text-xs font-semibold text-white uppercase md:flex'>
						Бренды
					</a>
				</div>

				<SearchProducts />

				<div className='flex items-center gap-5'>
					<a href='#' className='text-primary'>
						<User size={24} />
					</a>
					<FavoriteIcon count={favorites.length} />
					<CartIcon count={cart.length} />
				</div>
			</Container>
		</header>
	)
}
