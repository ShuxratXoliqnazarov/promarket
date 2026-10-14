import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Container } from '@/shared/ui'
import { getBanners } from '../../api/homeApi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function HeroBanner() {
	const [slides, setSlides] = useState([])
	const [promos, setPromos] = useState([])

	useEffect(() => {
		getBanners().then((data) => {
			setSlides(data.slides)
			setPromos(data.promos)
		})
	}, [])

	return (
		<section data-section='hero-banner' className='py-6'>
			<Container className='grid lg:grid-cols-[2fr_1fr]'>
				<Swiper
					className='hero h-72 w-full bg-primary lg:h-96'
					modules={[Navigation, Pagination, Autoplay]}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 4000 }}
					loop
				>
					{slides.map((slide) => (
						<SwiperSlide key={slide.id}>
							<div className='flex h-full flex-col items-center justify-center px-16 text-center text-white'>
								<h1 className='mb-4 text-3xl font-bold tracking-widest uppercase lg:text-4xl'>{slide.title}</h1>
								<p className='mb-6 font-semibold'>{slide.subtitle}</p>
								<a href='#' className='bg-hit px-6 py-2 text-xs font-semibold text-black uppercase'>
									Подробнее
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className='grid'>
					{promos.map((promo) => (
						<a
							key={promo.id}
							href='#'
							className={`flex flex-col justify-center p-8 text-white ${
								promo.color === 'accent' ? 'bg-accent' : 'bg-primary-dark'
							}`}
						>
							<p className='mb-3 text-xl font-bold tracking-widest uppercase'>{promo.title}</p>
							<span className='text-[10px] tracking-widest uppercase'>Подробнее</span>
						</a>
					))}
				</div>
			</Container>
		</section>
	)
}
