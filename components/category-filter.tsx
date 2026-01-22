"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { categories } from "@/lib/products"

export function CategoryFilter() {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("categoria") || "todos"

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/?categoria=${category.slug}`}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            currentCategory === category.slug
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
