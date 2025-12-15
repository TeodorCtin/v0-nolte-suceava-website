import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Nolte Küchen Suceava",
  description: "Politica de confidențialitate și protecția datelor personale Nolte Küchen Suceava.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-serif mb-8">Politica de Confidențialitate</h1>
          <p className="text-muted-foreground mb-8">Ultima actualizare: Decembrie 2024</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-medium mb-4">1. Introducere</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nolte Küchen Suceava respectă confidențialitatea vizitatorilor site-ului și a clienților noștri. Această
                politică de confidențialitate explică modul în care colectăm, utilizăm și protejăm datele dumneavoastră
                personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">2. Date Colectate</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Colectăm următoarele categorii de date personale:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Nume și prenume</li>
                <li>Adresă de email</li>
                <li>Număr de telefon</li>
                <li>Adresă (pentru livrare și montaj)</li>
                <li>Preferințe de programare</li>
                <li>Informații despre proiectul de bucătărie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">3. Scopul Prelucrării</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Utilizăm datele dumneavoastră pentru:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Programarea și confirmarea întâlnirilor la showroom</li>
                <li>Comunicarea referitoare la proiecte și comenzi</li>
                <li>Trimiterea de oferte și informații despre produse</li>
                <li>Îmbunătățirea serviciilor noastre</li>
                <li>Respectarea obligațiilor legale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">4. Drepturile Dumneavoastră</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                În conformitate cu GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Dreptul de acces la datele personale</li>
                <li>Dreptul la rectificare</li>
                <li>Dreptul la ștergere ("dreptul de a fi uitat")</li>
                <li>Dreptul la restricționarea prelucrării</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de opoziție</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">5. Păstrarea Datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru scopurile pentru care au
                fost colectate sau conform cerințelor legale. După expirarea perioadei de păstrare, datele sunt șterse
                în siguranță.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">6. Securitatea Datelor</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale
                împotriva accesului neautorizat, pierderii sau distrugerii. Aceste măsuri includ criptarea datelor,
                controlul accesului și instruirea personalului.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">7. Cookie-uri</h2>
              <p className="text-muted-foreground leading-relaxed">
                Site-ul nostru utilizează cookie-uri pentru a îmbunătăți experiența de navigare. Puteți controla
                utilizarea cookie-urilor prin setările browser-ului dumneavoastră.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium mb-4">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pentru orice întrebări privind prelucrarea datelor personale sau pentru a vă exercita drepturile, ne
                puteți contacta la:
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
