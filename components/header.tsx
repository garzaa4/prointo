"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
const navLinks = [
  { name: "Productos", href: "/productos" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Acerca de Nosotros", href: "/nosotros" },
  { name: "Sucursales", href: "/sucursales" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
       <Link href="/" className="flex items-center">
  <Image
    src="/public/logo.png"
    alt="Prointo"
    width={160}
    height={150}
    priority
    className="object-contain"
  />
</Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/#contacto">
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contacto
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/#contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full bg-primary text-primary-foreground">
                  Contacto
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
