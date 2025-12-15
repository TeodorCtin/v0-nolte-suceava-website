import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Contact & Programare | Nolte Küchen Suceava",
  description:
    "Programează o întâlnire la showroom-ul Nolte Küchen din Suceava. Consultanță gratuită pentru bucătăria ta de vis. Telefon: 0730 99 22 55.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px]">
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Contact Nolte Suceava"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <p className="text-accent font-medium mb-4">CONTACT</p>
              <h1 className="text-4xl md:text-5xl text-background font-serif mb-6">
                Programează o <em>întâlnire</em>
              </h1>
              <p className="text-background/80 text-lg">
                Suntem aici să te ajutăm să-ți creezi bucătăria visurilor tale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif mb-8">
                Vino la <em>showroom</em>
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Adresă</h3>
                    <p className="text-muted-foreground">
                      Strada Principală, Nr. 123
                      <br />
                      Ipotești, Jud. Suceava
                      <br />
                      România
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <a
                      href="tel:+40730992255"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      0730 99 22 55
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:contact@noltesuceava.ro"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contact@noltesuceava.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Program</h3>
                    <p className="text-muted-foreground">
                      Luni - Vineri: 09:00 - 18:00
                      <br />
                      Sâmbătă: 10:00 - 14:00
                      <br />
                      Duminică: Închis
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Locație Showroom"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-muted rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-serif">Programează întâlnire showroom</h2>
              </div>

              <p className="text-muted-foreground mb-8">
                Completează formularul de mai jos și te vom contacta pentru a confirma întâlnirea. Consultația este
                gratuită și fără obligații.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prenume *</Label>
                    <Input id="firstName" placeholder="Prenumele tău" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nume *</Label>
                    <Input id="lastName" placeholder="Numele tău" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="email@exemplu.ro" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input id="phone" type="tel" placeholder="07XX XXX XXX" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Data preferată</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Ora preferată</Label>
                    <Select>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Selectează ora" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Ce te interesează?</Label>
                  <Select>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Selectează" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Bucătărie nouă</SelectItem>
                      <SelectItem value="renovation">Renovare bucătărie</SelectItem>
                      <SelectItem value="consultation">Consultanță design</SelectItem>
                      <SelectItem value="quote">Ofertă de preț</SelectItem>
                      <SelectItem value="other">Altceva</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj (opțional)</Label>
                  <Textarea id="message" placeholder="Spune-ne mai multe despre proiectul tău..." rows={4} />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="gdpr" className="mt-1" required />
                  <label htmlFor="gdpr" className="text-sm text-muted-foreground">
                    Sunt de acord cu prelucrarea datelor personale conform{" "}
                    <a href="/politica-confidentialitate" className="text-accent hover:underline">
                      Politicii de Confidențialitate
                    </a>
                    . *
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                >
                  Trimite cererea de programare
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">
            Întrebări <em>frecvente</em>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Consultația este gratuită?",
                a: "Da, consultația la showroom este complet gratuită și fără obligații. Venim cu sfaturi personalizate pentru proiectul tău.",
              },
              {
                q: "Cât durează o vizită la showroom?",
                a: "O vizită tipică durează între 1-2 ore, timp în care poți explora expunerile, discuta cu designerii noștri și primi o primă estimare.",
              },
              {
                q: "Oferiți servicii de montaj?",
                a: "Da, avem echipă proprie de montaj cu experiență în instalarea bucătăriilor Nolte. Montajul este inclus în oferta noastră.",
              },
              {
                q: "Care este termenul de livrare?",
                a: "Termenul standard de livrare este de 8-12 săptămâni de la confirmarea comenzii, în funcție de complexitatea proiectului.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-background rounded-xl p-6">
                <h3 className="font-medium mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
