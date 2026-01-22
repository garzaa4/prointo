import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Acerca de Nosotros
            </h1>
            <p className="mt-2 text-muted-foreground">
              Conoce nuestra historia y filosofía de diseño
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Nuestra Historia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                texto
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">
                Nuestra Misión
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                texto
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6">
                Nuestros Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-foreground mb-2">Seguridad</h3>
                  <p className="text-sm text-muted-foreground">La protección de las personas es nuestra prioridad número uno.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-foreground mb-2">Calidad</h3>
                  <p className="text-sm text-muted-foreground">Solo trabajamos con productos certificados y de marcas reconocidas.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-foreground mb-2">Servicio</h3>
                  <p className="text-sm text-muted-foreground">Asesoría especializada para elegir el equipo adecuado.</p>
                </div>
                <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-foreground mb-2">Compromiso</h3>
                  <p className="text-sm text-muted-foreground">Entrega puntual y precios competitivos garantizados.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
