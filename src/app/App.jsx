import { HomePage } from '@/pages/home'
import { Footer } from '@/widgets/layout/footer'
import { Header } from '@/widgets/layout/header'
import './styles/index.css'

export function App() {
	return (
		<div className='min-h-screen bg-[#f3f8fd]'>
			<Header />
			<HomePage />
			<Footer />
		</div>
	)
}
