import { formatPrice } from '@/shared/lib'

export function ProductCard({ product }) {
  return (
    <div className="flex flex-col rounded-xl bg-white p-4 shadow-sm">
      <img src={product.image} alt={product.title} className="mb-4 h-48 object-contain" />
      <h3 className="mb-2 line-clamp-2 font-medium">{product.title}</h3>
      <p className="mt-auto text-lg font-bold text-blue-600">{formatPrice(product.price)}</p>
    </div>
  )
}
