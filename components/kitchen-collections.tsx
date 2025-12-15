"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const collections = [
  {
    id: "trend",
    title: "Trend Küchen",
    subtitle: "Bucătării moderne",
    description: "Design minimalist cu linii curate și finisaje contemporane pentru stilul de viață modern.",
    image: "/modern-trend-kitchen-dark-cabinets-minimalist.jpg",
  },
  {
    id: "landhaus",
    title: "Landhaus Küchen",
    subtitle: "Bucătării rustice",
    description: "Căldura și farmecul bucătăriilor tradiționale cu tehnologie modernă.",
    image: "/rustic-country-style-kitchen-wood-warm.jpg",
  },
  {
    id: "zeitlose",
    title: "Zeitlose Küchen",
    subtitle: "Bucătării atemporale",
    description: "Eleganță clasică care nu se demodează niciodată.",
    image: "/timeless-elegant-kitchen-white-classic.jpg",
  },
  {
    id: "matrixart",
    title: "MatrixArt",
    subtitle: "Fără mânere",
    description: "Sisteme inovatoare de deschidere pentru un aspect curat și minimalist.",
    image: "/handleless-kitchen-modern-sleek-design.jpg",
  },
]

export function KitchenCollections() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="colectii" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">Lumea Nolte</p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              <em className="font-serif italic">Bucătăria</em> este camera camerelor.
              <br />
              <span className="text-muted-foreground">Aici trăim mai intens ca oriunde.</span>
            </h2>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">Mereu actualizat!</p>
            <p className="text-sm text-foreground">
              Materiale inovatoare.
              <br />
              Culori în tendințe.
              <br />
              Design-uri moderne.
            </p>
          </div>
        </div>

        {/* Collection Tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-8 border-b border-border pb-4">
          {collections.map((collection, index) => (
            <button
              key={collection.title}
              onClick={() => setActiveTab(index)}
              className={`text-sm transition-colors ${
                index === activeTab
                  ? "text-foreground border-b-2 border-foreground pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {collection.subtitle}
            </button>
          ))}
          <Button asChild variant="outline" className="rounded-full ml-auto bg-transparent">
            <Link href="/produse">Descoperă colecțiile</Link>
          </Button>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab((prev) => (prev === 0 ? collections.length - 1 : prev - 1))}
              className="p-2 rounded-full border border-border hover:bg-muted/20 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setActiveTab((prev) => (prev === collections.length - 1 ? 0 : prev + 1))}
              className="p-2 rounded-full border border-border hover:bg-muted/20 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Collection Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Collection */}
          <Link
            href={`/produse#${collections[activeTab].id}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-2 md:aspect-[21/9]"
          >
            <Image
              src={collections[activeTab].image || "/placeholder.svg"}
              alt={collections[activeTab].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:max-w-lg">
              <p className="text-accent text-sm font-medium mb-2">{collections[activeTab].subtitle}</p>
              <h3 className="text-background text-3xl md:text-4xl font-serif mb-3">{collections[activeTab].title}</h3>
              <p className="text-background/80 mb-4">{collections[activeTab].description}</p>
              <span className="inline-flex items-center gap-2 text-background font-medium group-hover:text-accent transition-colors">
                Descoperă colecția <ArrowRight className="h-4 w-4" />
              </span>
            </div>
            <button className="absolute top-4 right-4 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors">
              <Heart className="h-5 w-5 text-background" />
            </button>
          </Link>

          {/* Other Collections Preview */}
          {collections
            .filter((_, i) => i !== activeTab)
            .slice(0, 2)
            .map((collection) => (
              <Link
                key={collection.title}
                href={`/produse#${collection.id}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-background/80 text-sm mb-1">{collection.subtitle}</p>
                  <h3 className="text-background text-xl font-medium flex items-center gap-2">
                    {collection.title}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                </div>
                <button className="absolute top-4 left-4 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors">
                  <Heart className="h-5 w-5 text-background" />
                </button>
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}
