import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, Ruler, Palette, Settings, ChefHat, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Planificare Bucătărie | Sfaturi și Ghid Nolte Küchen Suceava",
  description:
    "Ghid complet pentru planificarea bucătăriei tale Nolte Küchen. Sfaturi de la experți, idei de design și pași pentru bucătăria perfectă.",
}

const planningSteps = [
  {
    icon: Lightbulb,
    title: "1. Definește-ți Nevoile",
    description: "Gândește-te la stilul tău de viață, obiceiurile de gătit și cât spațiu de depozitare ai nevoie.",
  },
  {
    icon: Ruler,
    title: "2. Măsoară Spațiul",
    description: "Măsurătorile precise sunt esențiale. Include uși, ferestre, prize și țevi în plan.",
  },
  {
    icon: Palette,
    title: "3. Alege Stilul",
    description: "Modern, clasic sau rustic? Descoperă colecțiile noastre pentru a găsi stilul perfect.",
  },
  {
    icon: Settings,
    title: "4. Selectează Echipamentele",
    description: "Electrocasnicele influențează designul. Alege-le devreme în proces.",
  },
  {
    icon: ChefHat,
    title: "5. Consultă un Expert",
    description: "Echipa noastră te ajută să optimizezi spațiul și să eviți greșelile costisitoare.",
  },
  {
    icon: Sparkles,
    title: "6. Finalizează Detaliile",
    description: "Mânere, iluminare, accesorii - detaliile fac diferența.",
  },
]

const tips = [
  {
    title: "Triunghiul de lucru",
    content:
      "Poziționează chiuveta, aragazul și frigiderul în formă de triunghi pentru eficiență maximă. Distanța ideală între ele este de 1.2 - 2.7 metri.",
  },
  {
    title: "Iluminarea",
    content:
      "Combină iluminarea generală cu lumini punctuale sub dulapurile suspendate. LED-urile sunt eficiente energetic și oferă o lumină excelentă pentru lucru.",
  },
  {
    title: "Depozitarea",
    content:
      "Planifică mai mult spațiu de depozitare decât crezi că ai nevoie. Sertarele adânci și sistemele de organizare fac viața mai ușoară.",
  },
  {
    title: "Înălțimea blatului",
    content:
      "Înălțimea standard este de 85-90 cm, dar poate fi ajustată în funcție de statura ta. O înălțime corectă previne durerile de spate.",
  },
  {
    title: "Ventilația",
    content:
      "O hotă bună elimină mirosurile și grăsimea. Calculează puterea necesară în funcție de dimensiunea aragazului și tipul de gătit.",
  },
  {
    title: "Prizele electrice",
    content:
      "Planifică mai multe prize decât ai nevoie acum. Poziționează-le strategic pentru electrocasnicele mici și încărcătoare.",
  },
]

const layouts = [
  { name: "În linie", description: "Ideală pentru spații înguste", image: "/placeholder.svg?height=300&width=400" },
  { name: "În L", description: "Versatilă, pentru colțuri", image: "/placeholder.svg?height=300&width=400" },
  { name: "În U", description: "Maximum de spațiu de lucru", image: "/placeholder.svg?height=300&width=400" },
  { name: "Cu insulă", description: "Perfectă pentru spații deschise", image: "/placeholder.svg?height=300&width=400" },
]

export default function PlanningPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Planificare Bucătărie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <p className="text-accent font-medium mb-4">PLANIFICARE</p>
              <h1 className="text-4xl md:text-5xl text-background font-serif mb-6">
                Ghidul tău pentru bucătăria <em>perfectă</em>
              </h1>
              <p className="text-background/80 text-lg">
                Sfaturi de la experți pentru a-ți planifica bucătăria visurilor tale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">PROCESUL</p>
            <h2 className="text-3xl md:text-4xl font-serif">
              6 pași către bucătăria <em>ideală</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningSteps.map((step) => (
              <div key={step.title} className="bg-muted rounded-2xl p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-6">
                  <step.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layouts Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-2">CONFIGURAȚII</p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Tipuri de <em>layout</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layouts.map((layout) => (
              <div key={layout.name} className="bg-background rounded-xl overflow-hidden group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={layout.image || "/placeholder.svg"}
                    alt={layout.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium mb-1">{layout.name}</h3>
                  <p className="text-muted-foreground text-sm">{layout.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-2">SFATURI ȘI TRUCURI</p>
            <h2 className="text-3xl md:text-4xl font-serif">Știai că...?</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {tips.map((tip, index) => (
              <AccordionItem key={tip.title} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{tip.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{tip.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-6">
            Hai să planificăm <em>împreună</em>
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Echipa noastră de designeri te așteaptă la showroom pentru o consultație gratuită. Vom analiza spațiul tău
            și îți vom oferi soluții personalizate.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
            <Link href="/contact">Programează consultația gratuită</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
