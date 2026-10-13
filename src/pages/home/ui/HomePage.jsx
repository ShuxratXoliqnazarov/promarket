import { useEffect, useState } from 'react'
import { getProducts, ProductCard } from '@/entities/product'
import { Container } from '@/shared/ui'

export function HomePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Container className="py-8">
      {loading && <p>Загрузка...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}
