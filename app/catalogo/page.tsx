import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, FileText, Mail } from "lucide-react"

export default function CatalogoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Catálogo Digital
            </h1>
            <p className="mt-2 text-white/80">
              Descarga nuestro catálogo completo con todos los productos y especificaciones
            </p>
          </div>
        </section>

        {/* Catalog Options */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Download Option */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  Catálogo PDF
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Descarga nuestro catálogo completo en formato PDF con todas las especificaciones técnicas y fotografías de alta resolución.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Equipos de protección completos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Fichas técnicas y certificaciones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Guía de selección por industria
                  </li>
                </ul>
                <Button className="mt-6 w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Catálogo
                </Button>
              </div>

              {/* Request Option */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  Catálogo Personalizado
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Solicita un catálogo de alguna de las marcas con las que trabajamos.
                </p>
                <Button variant="outline" className="mt-6 w-full bg-transparent" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Solicitar Catálogo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
