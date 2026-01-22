"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

interface DiscountSliderProps {
  products: Product[]
}

export function DiscountSlider({ products }: DiscountSliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  if (products.length === 0) return null

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("left")}
          className="rounded-full bg-card shadow-lg hover:bg-secondary"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          className="rounded-full bg-card shadow-lg hover:bg-secondary"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/producto/${product.id}`}
            className="group flex-shrink-0 w-72"
          >
            <div className="relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    -{product.discount}%
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
