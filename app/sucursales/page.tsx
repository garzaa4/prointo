import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock } from "lucide-react"

const sucursales = [
  {
    id: 1,
    name: "Matriz CDMX",
    address: "Av. Industrial 456, Zona Industrial Vallejo",
    city: "Ciudad de México",
    phone: "+52 55 1234 5678",
    hours: "Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00",
  },
  {
    id: 2,
    name: "Sucursal Monterrey",
    address: "Av. Ruiz Cortines 1234, Parque Industrial",
    city: "Monterrey, N.L.",
    phone: "+52 81 2345 6789",
    hours: "Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00",
  },
  {
    id: 3,
    name: "Sucursal Guadalajara",
    address: "Blvd. Tonalá 789, Zona Industrial",
    city: "Guadalajara, Jal.",
    phone: "+52 33 3456 7890",
    hours: "Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00",
  },
  {
    id: 4,
    name: "Sucursal Querétaro",
    address: "Av. de la Industria 321, Parque Industrial Benito Juárez",
    city: "Querétaro, Qro.",
    phone: "+52 442 123 4567",
    hours: "Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00",
  },
]

export default function SucursalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-secondary-foreground">
              Nuestras Sucursales
            </h1>
            <p className="mt-2 text-secondary-foreground/80">
              Atención personalizada en todo México
            </p>
          </div>
        </section>

        {/* Branches List */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sucursales.map((sucursal) => (
                <div
                  key={sucursal.id}
                  className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
                >
                  <h2 className="text-xl font-bold text-foreground">
                    {sucursal.name}
                  </h2>
                  <p className="text-sm text-primary font-medium mt-1">{sucursal.city}</p>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{sucursal.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <p className="text-muted-foreground">{sucursal.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <p className="text-muted-foreground">{sucursal.hours}</p>
                    </div>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(sucursal.address + ", " + sucursal.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
