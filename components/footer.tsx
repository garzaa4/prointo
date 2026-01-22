import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/logesg.png"
                alt="Prointo"
                width={150}
                height={150}
                className="object-contain"
              />
            </Link>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg">Contacto</h4>
            <ul className="mt-4 space-y-3 text-primary-foreground/80">
              <li>prointopue@gmail.com</li>
              <li>+52 222 6505928</li>
              <li>Puebla, México</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg">Horario</h4>
            <ul className="mt-4 space-y-3 text-primary-foreground/80">
              <li>Lunes - Viernes: 9:00 - 18:00</li>
              <li>Sábado: 10:00 - 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2026 Prointo. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Términos
            </Link>
            <Link href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}