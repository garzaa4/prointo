import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/products"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/producto/${product.id}`}
          className="group"
        >
          <article className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="aspect-square relative overflow-hidden bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {product.category}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              
              {/* Mostrar colores si el producto tiene variaciones */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-3 flex gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-primary transition-colors cursor-pointer"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              )}
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
