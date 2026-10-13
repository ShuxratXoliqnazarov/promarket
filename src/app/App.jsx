import { HomePage } from '@/pages/home'
import { Header } from '@/widgets/header'
import './styles/index.css'

export function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HomePage />
    </div>
  )
}
