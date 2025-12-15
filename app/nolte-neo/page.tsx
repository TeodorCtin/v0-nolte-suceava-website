import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Leaf, Recycle, Award, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nolte NEO | Bucătării Sustenabile Nolte Küchen Suceava",
  description:
    "Nolte NEO - noua generație de bucătării germane eco-friendly. Materiale sustenabile, design inovator și conștiință ecologică. Disponibil în Suceava.",
}

const neoFeatures = [
  {
    icon: Leaf,
    title: "Materiale Eco-Friendly",
    description: "Folosim doar materiale certificate, cu impact minim asupra mediului și fără substanțe nocive.",
  },
  {
    icon: Recycle,
    title: "100% Reciclabil",
    description: "Toate componentele sunt proiectate pentru a fi reciclate la sfârșitul ciclului de viață.",
  },
  {
    icon: TreePine,
    title: "Lemn din Păduri Certificate",
    description: "Lemnul provine exclusiv din păduri gestionate sustenabil, certificate FSC și PEFC.",
  },
  {
    icon: Award,
    title: "Certificări de Calitate",
    description: "Produsele noastre îndeplinesc cele mai stricte standarde de calitate și sustenabilitate.",
  },
]

const neoCollections = [
  {
    name: "NEO Pure",
    description: "Linii minimaliste, culori naturale și un design care pune în valoare materialele autentice.",
    image: "/placeholder.svg?height=500&width=700",
  },
  {
    name: "NEO Organic",
    description: "Inspirat de natură, cu texturi organice și o paletă de culori pământii.",
    image: "/placeholder.svg?height=500&width=700",
  },
  {
    name: "NEO Urban",
    description: "Pentru spații moderne, cu soluții inteligente și un look contemporan.",
    image: "/placeholder.svg?height=500&width=700",
  },
]

export default function NolteNeoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px]">
        <Image src="/placeholder.svg?height=900&width=1600" alt="Nolte NEO" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-medium">Sustenabil prin design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-background font-serif mb-6">
                Nolte <em>NEO</em>
              </h1>
              <p className="text-background/90 text-xl mb-4">Viitorul bucătăriilor este verde.</p>
              <p className="text-background/70 text-lg mb-8">
                O nouă generație de bucătării care respectă planeta fără a face compromisuri în privința designului sau
                a calității.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                >
                  <Link href="/contact">Descoperă în showroom</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-background/10 border-background/30 text-background hover:bg-background/20"
                >
                  <Link href="#despre-neo">Află mai multe</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">DE CE NEO</p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Sustenabilitate în <em>fiecare</em> detaliu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {neoFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About NEO Section */}
      <section id="despre-neo" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium mb-4">FILOZOFIA NEO</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Un angajament pentru <em>generațiile</em> viitoare
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Nolte NEO nu este doar o colecție de bucătării - este o declarație de principii. Fiecare bucătărie NEO
                  este creată cu gândul la impactul asupra mediului înconjurător.
                </p>
                <p>
                  De la selecția materialelor până la procesul de producție și livrare, fiecare etapă este optimizată
                  pentru a reduce amprenta de carbon și pentru a proteja resursele naturale.
                </p>
                <p>
                  Rezultatul? Bucătării frumoase, funcționale și durabile care te fac să te simți bine - atât în casa
                  ta, cât și în privința alegerii făcute.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Producție sustenabilă Nolte"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-accent text-accent-foreground p-6 rounded-xl max-w-xs">
                <p className="text-3xl font-bold mb-1">-40%</p>
                <p className="text-sm">Reducere a emisiilor de CO₂ în producție față de 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">COLECȚII NEO</p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Trei stiluri, o <em>singură</em> filozofie
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {neoCollections.map((collection) => (
              <div key={collection.name} className="group bg-background rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">{collection.name}</h3>
                  <p className="text-muted-foreground">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Leaf className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Fă alegerea <em>sustenabilă</em>
          </h2>
          <p className="text-background/70 mb-8 text-lg">
            Vino la showroom-ul nostru din Suceava pentru a descoperi colecția Nolte NEO și pentru a afla cum poți avea
            o bucătărie frumoasă care respectă mediul.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
            <Link href="/contact">Programează o vizită</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
