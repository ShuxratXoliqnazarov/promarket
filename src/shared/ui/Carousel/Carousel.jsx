import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export function Carousel({ items, renderItem, slidesPerView = 5 }) {
	return (
		<Swiper
			className='carousel'
			modules={[Navigation]}
			navigation
			spaceBetween={1}
			breakpoints={{
				0: { slidesPerView: 1 },
				640: { slidesPerView: 2 },
				1024: { slidesPerView: 3 },
				1280: { slidesPerView: slidesPerView },
			}}
		>
			{items.map((item) => (
				<SwiperSlide key={item.id} className='h-auto!'>
					{renderItem(item)}
				</SwiperSlide>
			))}
		</Swiper>
	)
}
