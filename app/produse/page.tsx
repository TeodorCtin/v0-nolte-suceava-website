import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Produse | Bucătării Germane Nolte Küchen Suceava",
  description:
    "Explorează gama completă de bucătării Nolte Küchen: Trend, Landhaus, Zeitlose, MatrixArt. Calitate germană și design personalizat în Suceava.",
}

const productCategories = [
  {
    id: "trend",
    name: "Trend Küchen",
    title: "Design Modern pentru Stilul Tău de Viață",
    description:
      "Bucătăriile Trend combină cele mai recente tendințe în design cu funcționalitate excepțională. Linii curate, culori îndrăznețe și tehnologie de ultimă generație.",
    features: [
      "Fronturi mate și lucioase în diverse culori",
      "Sisteme de depozitare inteligente",
      "Iluminare LED integrată",
      "Blaturi premium din cuarț sau granit",
    ],
    images: ["/modern-trend-kitchen-black-matte-cabinets.jpg", "/modern-kitchen-island-cooking.jpg", "/kitchen-storage-pull-out-drawer.jpg"],
  },
  {
    id: "landhaus",
    name: "Landhaus Küchen",
    title: "Căldura Tradițiilor într-un Design Contemporan",
    description:
      "Bucătăriile Landhaus aduc farmecul caselor de țară în casa ta. Lemn natural, detalii artizanale și o atmosferă caldă, primitoare.",
    features: [
      "Lemn masiv și furnir de înaltă calitate",
      "Fronturi cu cadru și profil decorativ",
      "Mânere și accesorii clasice",
      "Tonuri calde de lemn natural",
    ],
    images: ["/country-style-kitchen-wood-warm-traditional.jpg", "/rustic-kitchen-wood-details.jpg", "/farmhouse-kitchen-cozy.jpg"],
  },
  {
    id: "zeitlose",
    name: "Zeitlose Küchen",
    title: "Eleganță Care Nu Se Demodează",
    description:
      "Design-urile Zeitlose sunt atemporale prin excelență. Linii elegante, proporții perfecte și materiale de cea mai bună calitate pentru o bucătărie care va arăta la fel de bine și peste 20 de ani.",
    features: [
      "Design clasic, rafinat",
      "Materiale premium, durabile",
      "Culori neutre, elegante",
      "Detalii de finisaj impecabile",
    ],
    images: [
      "/timeless-elegant-white-kitchen-classic-design.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: "matrixart",
    name: "MatrixArt",
    title: "Puritate Vizuală Fără Mânere",
    description:
      "Sistemul MatrixArt oferă un aspect perfect curat, fără mânere vizibile. Deschiderea se face prin apăsare (push-to-open) sau prin sisteme electrice.",
    features: [
      "Fronturi complet plane",
      "Sistem push-to-open",
      "Opțiuni electrice de deschidere",
      "Aspect minimalist, modern",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]

const materials = [
  { name: "Fronturi", options: ["Lac mat", "Lac lucios", "Melamină", "Lemn natural", "Sticlă"] },
  { name: "Blaturi", options: ["Cuarț", "Granit", "Ceramică", "Lemn masiv", "Inox"] },
  { name: "Corpuri", options: ["Alb mat", "Grafit", "Lemn natur", "Culori personalizate"] },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Produse Nolte Küchen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <p className="text-accent font-medium mb-4">PRODUSE</p>
              <h1 className="text-4xl md:text-5xl text-background font-serif mb-6">
                Bucătării germane pentru <em>fiecare</em> gust
              </h1>
              <p className="text-background/80 text-lg">
                Descoperă colecțiile Nolte Küchen și găsește bucătăria perfectă pentru tine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="trend" className="w-full">
            <TabsList className="flex flex-wrap justify-start gap-2 bg-transparent mb-12 h-auto">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 rounded-full border border-border data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} id={category.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Images */}
                  <div className="space-y-4">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                      <Image
                        src={category.images[0] || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {category.images.slice(1).map((img, idx) => (
                        <div key={idx} className="aspect-square relative rounded-xl overflow-hidden">
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`${category.name} detaliu`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:sticky lg:top-32">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">{category.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8">{category.description}</p>

                    <div className="space-y-4 mb-8">
                      {category.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-accent/20 mt-0.5">
                            <Check className="h-4 w-4 text-accent" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                        <Link href="/contact">Cere o ofertă</Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full px-8 bg-transparent">
                        <Link href="/galerie">Vezi proiecte realizate</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-2">MATERIALE</p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Calitate în <em>fiecare</em> detaliu
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material) => (
              <div key={material.name} className="bg-background rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-6">{material.name}</h3>
                <ul className="space-y-3">
                  {material.options.map((option) => (
                    <li key={option} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nolte NEO Promo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Nolte NEO" fill className="object-cover" />
            </div>
            <div>
              <p className="text-accent font-medium mb-4">NOLTE NEO</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Noua generație de bucătării <em>sustenabile</em>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nolte NEO reprezintă viitorul designului de bucătării: materiale eco-friendly, producție sustenabilă și
                un design care respectă atât oamenii, cât și planeta.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                <Link href="/nolte-neo">
                  Descoperă Nolte NEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
