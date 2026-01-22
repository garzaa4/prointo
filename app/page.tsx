import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DiscountSlider } from "@/components/discount-slider"
import { getDiscountedProducts } from "@/lib/products"

export default function HomePage() {
  const discountedProducts = getDiscountedProducts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary py-24 lg:py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9.243 2 7 4.243 7 7c0 .768.182 1.493.5 2.144L6 10.5v1.75l1.5.75v2.5L6 16v2h12v-2l-1.5-.5v-2.5l1.5-.75V10.5l-1.5-1.356A5.003 5.003 0 0017 7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3a3 3 0 01-6 0c0-1.654 1.346-3 3-3z"/>
              </svg>
              Todo en Protección Industrial
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground tracking-tight text-balance">
              Tu seguridad es nuestra prioridad
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed text-balance">
              Equipos de protección personal de alta calidad para la industria. Cascos, botas, arneses, lentes y más. Solicita tu cotización sin compromiso.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/productos"
                className="inline-flex px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Ver Productos
              </a>
              <a
                href="/catalogo"
                className="inline-flex px-8 py-3 bg-card text-foreground font-medium rounded-lg border border-border hover:bg-card/90 transition-colors"
              >
                Descargar Catálogos
              </a>
            </div>
          </div>
        </section>

        {/* Discount Slider Section */}
        {discountedProducts.length > 0 && (
          <section className="py-16 lg:py-20 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  Ofertas Especiales
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Aprovecha nuestros descuentos exclusivos por tiempo limitado
                </p>
              </div>
              
              <DiscountSlider products={discountedProducts} />
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">Certificaciones</h3>
                <p className="mt-2 text-sm text-muted-foreground">Productos certificados ANSI, OSHA y NIOSH</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">Cotización en 24h</h3>
                <p className="mt-2 text-sm text-muted-foreground">Respuesta rápida para tus proyectos industriales</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">Cobertura Nacional</h3>
                <p className="mt-2 text-sm text-muted-foreground">Sucursales y envíos a todo el país</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground text-balance">
              ¿Necesitas equipar a tu equipo de trabajo?
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Tenemos precios especiales para compras al mayoreo. Contáctanos para una cotización personalizada sin compromiso.
            </p>
            <a
              href="#contacto"
              className="inline-flex mt-8 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Solicitar Cotización
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
