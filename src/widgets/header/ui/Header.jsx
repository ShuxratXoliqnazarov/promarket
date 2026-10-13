import { Container } from '@/shared/ui'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <Container className="flex h-16 items-center">
        <span className="text-2xl font-bold text-blue-600">ProMarket</span>
      </Container>
    </header>
  )
}
