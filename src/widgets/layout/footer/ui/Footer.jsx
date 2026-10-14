import { Container, Logo } from '@/shared/ui'
import { RequestCallbackButton } from '@/features/request-callback'
import { WhatsAppIcon, InstagramIcon, TelegramIcon } from './icons'

/**
 * @section: Подвал сайта
 * Figma: ссылки на разделы, телефон, график работы, адрес склада, соцсети, «Оцените магазин», копирайт
 * Использует: features/request-callback, shared/ui/Logo
 */

const CATALOG_LINKS = [
	'Плитка',
	'Сантехника',
	'Мебель для ванной',
	'Электроника и бытовая техника',
	'Отопление',
	'Напольное покрытие'
]

const INFO_LINKS = ['Оплата', 'Доставка', 'Поставщикам', 'Статьи', 'Контакты']

const LINK_CLASS = 'text-sm text-[#2D7DD2] transition-colors hover:text-[#00396B]'

function FooterNav({ items }) {
	return (
		<nav className='flex flex-col gap-3'>
			{items.map((label) => (
				<a key={label} href='#' className={LINK_CLASS}>
					{label}
				</a>
			))}
		</nav>
	)
}

function YandexRatingBadge() {
	return (
		<div className='flex items-center gap-3'>
			<span className='text-sm leading-tight font-bold whitespace-nowrap'>
				<span className='text-[#FF0000]'>Яндекс</span>
				<span className='block text-[10px] font-normal text-gray-400'>маркет</span>
			</span>
			<span className='rounded-2xl border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-gray-600'>
				Оцените магазин
			</span>
		</div>
	)
}

export function Footer() {
	return (
		<footer data-section='footer' className='mt-20 bg-white'>
			<Container className='grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
				<FooterNav items={CATALOG_LINKS} />
				<FooterNav items={INFO_LINKS} />

				<div className='flex flex-col gap-4'>
					<a
						href='tel:+74950183210'
						className='text-xl font-bold text-[#1E212C] transition-colors hover:text-[#2D7DD2]'
					>
						8 495 018-32-10
					</a>
					<RequestCallbackButton />
					<div className='flex flex-col gap-1 text-sm text-gray-700'>
						<p>Пн-Пт: 10:00 — 20:00</p>
						<p>Сб: 10:00 — 18:00</p>
						<p>Вс: выходной</p>
					</div>
				</div>

				<div className='flex flex-col gap-1 text-sm text-gray-700'>
					<p className='font-bold text-[#1E212C]'>Склад:</p>
					<p>Москва, ул. Салтыковская, 6 стр 11</p>
					<a href='mailto:zakaz@ggpromarket.ru' className={LINK_CLASS}>
						zakaz@ggpromarket.ru
					</a>
				</div>
			</Container>

			<div className='bg-[#f3f8fd]'>
				<Container className='flex flex-wrap items-center justify-between gap-6 border-t border-gray-100 py-8'>
					<div>
						<Logo />
						<p className='mt-2 text-xs text-gray-400'>© 2020 ggpromarket.ru</p>
					</div>

					<div className='flex items-center gap-4 text-[#2D7DD2]'>
						<a
							href='#'
							aria-label='WhatsApp'
							className='transition-colors hover:text-[#00396B]'
						>
							<WhatsAppIcon className='size-6' />
						</a>
						<a
							href='#'
							aria-label='Instagram'
							className='transition-colors hover:text-[#00396B]'
						>
							<InstagramIcon className='size-6' />
						</a>
						<a
							href='#'
							aria-label='Telegram'
							className='transition-colors hover:text-[#00396B]'
						>
							<TelegramIcon className='size-6' />
						</a>
					</div>

					<YandexRatingBadge />
				</Container>

				<Container className='space-y-3 border-t border-gray-200 py-6 text-xs leading-relaxed text-gray-400'>
					<p>
						Копирование всех составляющих частей сайта в какой бы то ни было форме без
						письменного разрешения владельцев авторских прав запрещено. Сайт носит
						исключительно информационный характер, и ни при каких условиях не является
						публичной офертой, определяемой положениями статьи 437(2) Гражданского
						кодекса Российской Федерации. Наличие и цены уточняйте у наших операторов.
					</p>
					<p>
						Сайт использует технологию cookie. Используя сайт, Вы соглашаетесь с{' '}
						<a href='#' className='text-[#2D7DD2] hover:underline'>
							правилами использования cookie
						</a>
						, а также даёте{' '}
						<a href='#' className='text-[#2D7DD2] hover:underline'>
							согласие на обработку персональных данных
						</a>
					</p>
				</Container>
			</div>
		</footer>
	)
}
