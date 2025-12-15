import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Bucătărie în tonuri de lemn",
    location: "Suceava",
    image: "/modern-kitchen-wood-tones-oak-warm-interior-design.jpg",
  },
  {
    title: "Bucătărie în tonuri de negru",
    location: "Ipotești",
    image: "/black-modern-kitchen-sleek-design-dark-cabinets.jpg",
  },
  {
    title: "Bucătărie contemporană",
    location: "Botoșani",
    image: "/contemporary-white-kitchen-minimalist-bright.jpg",
  },
  {
    title: "Bucătărie clasică",
    location: "Fălticeni",
    image: "/classic-traditional-kitchen-elegant-timeless.jpg",
  },
]

export function GallerySection() {
  return (
    <section id="galerie" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">Portofoliu</p>
            <h2 className="text-3xl md:text-4xl font-light">
              Proiecte <em className="font-serif italic">realizate</em>
            </h2>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 rounded-full bg-transparent">
            <Link href="#" className="flex items-center gap-2">
              Vezi toate proiectele
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link key={project.title} href="#" className="group block">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-3">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
