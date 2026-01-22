import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryFilter } from "@/components/category-filter"
import { getProductsByCategory, categories } from "@/lib/products"

interface PageProps {
  searchParams: Promise<{ categoria?: string }>
}

export default async function ProductosPage({ searchParams }: PageProps) {
  const params = await searchParams
  const currentCategory = params.categoria || "todos"
  const products = getProductsByCategory(currentCategory)
  const categoryInfo = categories.find((c) => c.slug === currentCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Nuestros Productos
            </h1>
            <p className="mt-2 text-muted-foreground">
              Explora nuestra amplia variedad de equipos de protección industrial
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-6 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="h-10" />}>
              <CategoryFilter />
            </Suspense>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                {categoryInfo?.name || "Todos los productos"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {categoryInfo?.description || "Explora toda nuestra colección"}
              </p>
            </div>
            
            <ProductGrid products={products} />
            
            {products.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No hay productos en esta categoría.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
