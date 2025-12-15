import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Inspirație | Colecții Bucătării Nolte Küchen Suceava",
  description:
    "Descoperă colecțiile noastre de bucătării germane Nolte Küchen. Trend, Landhaus, Zeitlose și multe altele. Inspirație pentru bucătăria ta de vis.",
}

const collections = [
  {
    id: "trend",
    title: "Trend Küchen",
    subtitle: "Design Modern",
    description: "Bucătării cu linii curate și finisaje contemporane pentru un stil de viață modern.",
    image: "/modern-trend-kitchen-dark-cabinets-minimalist.jpg",
    featured: true,
  },
  {
    id: "landhaus",
    title: "Landhaus Küchen",
    subtitle: "Stil Rustic",
    description: "Căldura și farmecul bucătăriilor tradiționale cu tehnologie modernă.",
    image: "/rustic-country-style-kitchen-wood-warm.jpg",
  },
  {
    id: "zeitlose",
    title: "Zeitlose Küchen",
    subtitle: "Eleganță Atemporală",
    description: "Design clasic care nu se demodează niciodată, pentru cei care apreciază eleganța.",
    image: "/timeless-elegant-kitchen-white-classic.jpg",
  },
  {
    id: "matrixart",
    title: "MatrixArt",
    subtitle: "Fronturi Fără Mâner",
    description: "Sisteme inovatoare de deschidere pentru un aspect curat și minimalist.",
    image: "/handleless-kitchen-modern-sleek-design.jpg",
  },
]

const inspirationIdeas = [
  {
    title: "Spații mici, idei mari",
    description: "Soluții inteligente pentru apartamente și bucătării compacte.",
    image: "/small-kitchen-smart-storage-solutions.jpg",
  },
  {
    title: "Culori îndrăznețe",
    description: "Adaugă personalitate bucătăriei tale cu nuanțe vibrante.",
    image: "/bold-colorful-kitchen-design-yellow-blue.jpg",
  },
  {
    title: "Lemn și natură",
    description: "Materiale naturale pentru o atmosferă caldă și primitoare.",
    image: "/natural-wood-kitchen-warm-cozy.jpg",
  },
  {
    title: "Industrial chic",
    description: "Metal, beton și lemn pentru un look urban sofisticat.",
    image: "/industrial-kitchen-concrete-metal-wood.jpg",
  },
]

export default function InspirationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image src="/luxury-kitchen-showroom-inspiration-elegant.jpg" alt="Inspirație Nolte Küchen" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <p className="text-accent font-medium mb-4">INSPIRAȚIE</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-background font-serif mb-6">
                Lasă-te <em>inspirat</em> de frumusețea bucătăriilor germane
              </h1>
              <p className="text-background/80 text-lg mb-8">
                Explorează colecțiile noastre și găsește stilul perfect pentru tine.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                <Link href="/contact">Vizitează showroom-ul</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-muted py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed">
            <em>
              Bucătăria este inima casei. Aici trăim, gătim și ne bucurăm de momentele importante alături de familie și
              prieteni.
            </em>
          </blockquote>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-accent font-medium mb-2">COLECȚII</p>
              <h2 className="text-3xl md:text-4xl font-serif">
                Lumea <em>Nolte</em>
              </h2>
            </div>
            <p className="text-muted-foreground mt-4 md:mt-0 max-w-md">
              Materiale inovatoare. Culori actuale. Design-uri moderne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                href={`/produse#${collection.id}`}
                className={`group relative overflow-hidden rounded-2xl ${
                  collection.featured ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                <button className="absolute top-4 right-4 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors">
                  <Heart className="h-5 w-5 text-background" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-accent text-sm font-medium mb-2">{collection.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl text-background font-serif mb-2">{collection.title}</h3>
                  <p className="text-background/80 mb-4 max-w-md">{collection.description}</p>
                  <span className="inline-flex items-center gap-2 text-background font-medium group-hover:text-accent transition-colors">
                    Descoperă colecția <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas Section */}
      <section id="idei" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-2">IDEI DE DESIGN</p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Inspirație pentru <em>fiecare</em> stil
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspirationIdeas.map((idea) => (
              <div key={idea.title} className="group bg-background rounded-xl overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={idea.image || "/placeholder.svg"}
                    alt={idea.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-2">{idea.title}</h3>
                  <p className="text-muted-foreground text-sm">{idea.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-6">
            Vino să vezi bucătăriile <em>în realitate</em>
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Imaginile sunt frumoase, dar experiența reală este și mai bună. Programează o vizită la showroom-ul nostru
            din Suceava.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
            <Link href="/contact">Programează o întâlnire</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
