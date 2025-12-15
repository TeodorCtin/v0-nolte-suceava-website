import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Galerie Proiecte | Bucătării Realizate Nolte Küchen Suceava",
  description:
    "Descoperă proiectele noastre de bucătării Nolte Küchen realizate în Suceava și împrejurimi. Inspirație pentru bucătăria ta de vis.",
}

const projects = [
  {
    id: 1,
    title: "Bucătărie Modernă cu Insulă",
    location: "Suceava",
    category: "modern",
    description: "Design minimalist cu fronturi gri antracit și insulă centrală",
    images: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 2,
    title: "Bucătărie Clasică Albă",
    location: "Fălticeni",
    category: "clasic",
    description: "Eleganță atemporală cu fronturi albe și blaturi din cuarț",
    images: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 3,
    title: "Bucătărie Rustică din Lemn",
    location: "Gura Humorului",
    category: "rustic",
    description: "Căldura lemnului natural într-un design contemporan",
    images: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 4,
    title: "Bucătărie Compactă Smart",
    location: "Suceava",
    category: "modern",
    description: "Soluții inteligente pentru un apartament urban",
    images: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 5,
    title: "Bucătărie cu Vedere la Grădină",
    location: "Ipotești",
    category: "modern",
    description: "Design deschis cu ferestre mari și nuanțe verzi",
    images: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 6,
    title: "Bucătărie Landhaus cu Accente Albastre",
    location: "Vatra Dornei",
    category: "rustic",
    description: "Farmecul tradițional cu accente de culoare îndrăznețe",
    images: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 7,
    title: "Bucătărie Handleless MatrixArt",
    location: "Suceava",
    category: "modern",
    description: "Linii curate fără mânere pentru un look ultra-modern",
    images: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 8,
    title: "Bucătărie Elegantă cu Marmură",
    location: "Rădăuți",
    category: "clasic",
    description: "Lux și rafinament cu accente de marmură",
    images: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 9,
    title: "Bucătărie Open Space",
    location: "Suceava",
    category: "modern",
    description: "Integrare perfectă în living pentru familii moderne",
    images: ["/placeholder.svg?height=600&width=800"],
  },
]

const categories = [
  { id: "toate", label: "Toate proiectele" },
  { id: "modern", label: "Modern" },
  { id: "clasic", label: "Clasic" },
  { id: "rustic", label: "Rustic" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Galerie Proiecte"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <p className="text-accent font-medium mb-4">GALERIE</p>
              <h1 className="text-4xl md:text-5xl text-background font-serif mb-6">
                Proiecte <em>realizate</em>
              </h1>
              <p className="text-background/80 text-lg">
                Descoperă bucătăriile create pentru clienții noștri din Suceava și împrejurimi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="toate" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-6 py-3 rounded-full border border-border data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="toate">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            {categories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((p) => p.category === category.id)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Vrei să-ți vezi bucătăria <em>aici</em>?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Contactează-ne pentru o consultație gratuită și începe-ți propria poveste cu Nolte Küchen.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
            <Link href="/contact">Începe proiectul tău</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group bg-background rounded-2xl overflow-hidden border border-border">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-accent text-sm mb-2">{project.location}</p>
        <h3 className="text-lg font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </div>
    </div>
  )
}
