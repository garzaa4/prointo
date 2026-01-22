import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteDialog } from "@/components/quote-dialog"
import { getProductById, products } from "@/lib/products"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: "Producto no encontrado",
    }
  }
  
  return {
    title: `${product.name} | Studio`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al catálogo</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="aspect-square relative rounded-xl overflow-hidden bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                {product.category}
              </span>
              
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {product.name}
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Características</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-accent" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Button */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Los precios varían según especificaciones. Solicita una cotización personalizada.
                </p>
                <QuoteDialog product={product} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
