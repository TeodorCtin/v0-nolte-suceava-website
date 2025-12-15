import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Termeni și Condiții | Nolte Küchen Suceava",
  description: "Termenii și condițiile de utilizare a site-ului și serviciilor Nolte Küchen Suceava.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-serif mb-8">Termeni și Condiții</h1>
          <p className="text-muted-foreground mb-8">Ultima actualizare: Decembrie 2024</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium mb-4">1. Dispoziții Generale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prezentele Termeni și Condiții reglementează utilizarea site-ului web noltesuceava.ro și relația dintre
                Nolte Küchen Suceava și utilizatorii săi. Prin accesarea și utilizarea acestui site, acceptați acești
                termeni în întregime.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">2. Despre Noi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nolte Küchen Suceava este un showroom autorizat care comercializează și instalează bucătării marca Nolte
                Küchen în zona Suceava și împrejurimi. Suntem dedicați oferirii de produse de cea mai înaltă calitate și
                servicii profesionale.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">3. Produse și Servicii</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Oferim următoarele servicii:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Consultanță și design personalizat pentru bucătării</li>
                <li>Vânzare de mobilier de bucătărie Nolte Küchen</li>
                <li>Măsurători la domiciliu</li>
                <li>Livrare și montaj profesionist</li>
                <li>Service și întreținere post-vânzare</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">4. Prețuri și Plăți</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prețurile afișate pe site sunt orientative și pot varia în funcție de configurația aleasă. Prețul final
                este cel specificat în oferta personalizată și contractul de vânzare. Metodele de plată acceptate vor fi
                comunicate la momentul comenzii.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">5. Garanție</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Produsele Nolte Küchen beneficiază de garanție conform legislației în vigoare și politicii
                producătorului:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>10 ani garanție pentru corpurile de mobilier</li>
                <li>5 ani garanție pentru feronerie și mecanisme</li>
                <li>2 ani garanție pentru electrocasnice (conform producătorului)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">6. Livrare și Montaj</h2>
              <p className="text-muted-foreground leading-relaxed">
                Termenul standard de livrare este de 8-12 săptămâni de la confirmarea comenzii. Montajul este efectuat
                de echipa noastră specializată și este inclus în prețul convenit. Clientul trebuie să asigure accesul la
                locația de montaj și pregătirea spațiului conform instrucțiunilor primite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">7. Dreptul de Retragere</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru produsele realizate la comandă și personalizate, dreptul de retragere nu se aplică conform
                legislației în vigoare. Pentru produsele standard, aveți dreptul de a vă retrage din contract în termen
                de 14 zile de la primirea produsului.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">8. Proprietate Intelectuală</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conținutul acestui site (texte, imagini, logo-uri, design) este protejat de drepturile de autor și nu
                poate fi utilizat fără acordul nostru scris. Marca Nolte Küchen este proprietatea Nolte Küchen GmbH &
                Co. KG.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">9. Limitarea Răspunderii</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ne străduim să oferim informații corecte și actualizate, dar nu garantăm că site-ul este lipsit de
                erori. Nu suntem răspunzători pentru daune indirecte rezultate din utilizarea site-ului sau a
                informațiilor de pe acesta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">10. Legea Aplicabilă</h2>
              <p className="text-muted-foreground leading-relaxed">
                Acești termeni și condiții sunt guvernați de legile din România. Orice dispută va fi soluționată de
                instanțele competente din Suceava, România.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">11. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru orice întrebări privind acești termeni și condiții, ne puteți contacta:
              </p>
              <div className="mt-4 p-6 bg-muted rounded-xl">
                <p className="text-foreground font-medium">Nolte Küchen Suceava</p>
                <p className="text-muted-foreground">Email: contact@noltesuceava.ro</p>
                <p className="text-muted-foreground">Telefon: 0730 99 22 55</p>
                <p className="text-muted-foreground">Adresă: Ipotești, Suceava, România</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
