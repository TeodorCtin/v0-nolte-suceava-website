import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Award, Users, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Despre Noi | Showroom Nolte Küchen Suceava",
  description:
    "Showroom autorizat Nolte Küchen în Suceava. Peste 70 de ani de tradiție germană în designul bucătăriilor. Echipă de experți dedicați visului tău.",
}

const stats = [
  { value: "70+", label: "Ani de tradiție Nolte" },
  { value: "500+", label: "Proiecte realizate" },
  { value: "100%", label: "Clienți mulțumiți" },
  { value: "10", label: "Ani garanție" },
]

const values = [
  {
    icon: Award,
    title: "Calitate Germană",
    description:
      "Suntem mândri parteneri Nolte Küchen, brand cu peste 70 de ani de excelență în fabricarea bucătăriilor premium.",
  },
  {
    icon: Users,
    title: "Expertiză Locală",
    description:
      "Echipa noastră din Suceava combină cunoștințele tehnice cu înțelegerea nevoilor clienților din regiune.",
  },
  {
    icon: Clock,
    title: "Livrare la Timp",
    description: "Respectăm termenele promise. Fiecare proiect este planificat cu atenție pentru a evita întârzierile.",
  },
  {
    icon: Shield,
    title: "Garanție Extinsă",
    description:
      "Oferim garanție de 10 ani pentru corpurile de mobilier, pentru că avem încredere în calitatea produselor noastre.",
  },
]

const team = [
  {
    name: "Alexandru Popescu",
    role: "Director Showroom",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Maria Ionescu",
    role: "Designer Principal",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Andrei Munteanu",
    role: "Coordonator Montaj",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Showroom Nolte Küchen Suceava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <p className="text-accent font-medium mb-4">DESPRE NOI</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-background font-serif mb-6">
                Pasiune pentru <em>bucătării</em> excepționale
              </h1>
              <p className="text-background/80 text-lg">Showroom autorizat Nolte Küchen în Ipotești, Suceava.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">{stat.value}</p>
                <p className="text-accent-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium mb-4">POVESTEA NOASTRĂ</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                De la <em>pasiune</em> la profesie
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Showroom-ul Nolte Küchen Suceava s-a născut din dorința de a aduce cele mai bune bucătării germane în
                  inima Bucovinei. Am ales să reprezentăm Nolte pentru că împărtășim aceleași valori: calitate fără
                  compromis, atenție la detalii și respect pentru client.
                </p>
                <p>
                  De la prima consultație până la ultimul șurub montat, echipa noastră este alături de tine. Nu vindem
                  doar mobilier - creăm spații în care familiile se reunesc, se bucură și își creează amintiri.
                </p>
                <p>
                  La showroom-ul nostru din Ipotești poți vedea și atinge materialele, poți experimenta sistemele de
                  deschidere și îți poți imagina cum va arăta bucătăria ta de vis.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Showroom Nolte Suceava"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nolte History */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Fabrica Nolte Küchen Germania"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-medium mb-4">NOLTE KÜCHEN</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                70+ ani de <em>excelență</em> germană
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Fondată în 1958 în Löhne, Germania, Nolte Küchen a devenit unul dintre cei mai importanți producători
                  de mobilier de bucătărie din Europa. Cu o capacitate de producție de peste 1.500 de bucătării pe zi,
                  Nolte combină tradiția meșteșugărească cu tehnologia de ultimă generație.
                </p>
                <p>
                  Fiecare bucătărie Nolte este rezultatul a zeci de ani de experiență, cercetare continuă și o pasiune
                  neclintită pentru perfecțiune. De la selecția materialelor până la controlul final de calitate, nimic
                  nu este lăsat la întâmplare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">VALORILE NOASTRE</p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Ce ne <em>definește</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">ECHIPA</p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Oamenii din spatele <em>visurilor</em> tale
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Vino să ne <em>cunoști</em>
          </h2>
          <p className="text-background/70 mb-8 text-lg">
            Te așteptăm la showroom-ul nostru din Ipotești pentru a discuta despre proiectul tău și pentru a descoperi
            împreună soluția perfectă.
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
