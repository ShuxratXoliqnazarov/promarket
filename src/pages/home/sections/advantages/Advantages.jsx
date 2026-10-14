import { useEffect, useState } from 'react'
import { Package, RussianRuble, ShieldCheck, ThumbsUp, Truck } from 'lucide-react'
import { Container } from '@/shared/ui'
import { getAdvantages } from '../../api/homeApi'

const icons = {
	truck: Truck,
	shield: ShieldCheck,
	package: Package,
	ruble: RussianRuble,
	like: ThumbsUp,
}

export function Advantages() {
	const [advantages, setAdvantages] = useState([])

	useEffect(() => {
		getAdvantages().then((data) => setAdvantages(data))
	}, [])

	return (
		<section data-section='advantages' className='py-6'>
			<Container className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5'>
				{advantages.map((item) => {
					const Icon = icons[item.icon]

					return (
						<div key={item.id} className='flex items-center gap-3'>
							<Icon size={36} strokeWidth={1.2} className='shrink-0 text-accent' />
							<p className='text-xs'>{item.text}</p>
						</div>
					)
				})}
			</Container>
		</section>
	)
}
