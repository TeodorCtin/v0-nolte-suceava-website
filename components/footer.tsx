import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-2">Rămâi la curent</h3>
              <p className="text-background/70">Abonează-te la newsletter pentru noutăți și inspirație.</p>
            </div>
            <form className="flex gap-3">
              <Input
                type="email"
                placeholder="Adresa de email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 flex-1"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
                Abonează-te
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/image.png"
                alt="Nolte Küchen"
                width={120}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Showroom autorizat Nolte Küchen în Suceava. Oferim bucătării germane de cea mai înaltă calitate, cu design
              personalizat și materiale premium.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Inspirație */}
          <div>
            <h4 className="font-medium mb-6">Inspirație</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/inspiratie" className="text-background/70 text-sm hover:text-background transition-colors">
                  Colecții
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-background/70 text-sm hover:text-background transition-colors">
                  Galerie Proiecte
                </Link>
              </li>
              <li>
                <Link
                  href="/inspiratie#idei"
                  className="text-background/70 text-sm hover:text-background transition-colors"
                >
                  Idei de Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Produse */}
          <div>
            <h4 className="font-medium mb-6">Produse</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/produse" className="text-background/70 text-sm hover:text-background transition-colors">
                  Bucătării
                </Link>
              </li>
              <li>
                <Link href="/nolte-neo" className="text-background/70 text-sm hover:text-background transition-colors">
                  Nolte NEO
                </Link>
              </li>
              <li>
                <Link
                  href="/produse#trend"
                  className="text-background/70 text-sm hover:text-background transition-colors"
                >
                  Trend Küchen
                </Link>
              </li>
              <li>
                <Link
                  href="/produse#landhaus"
                  className="text-background/70 text-sm hover:text-background transition-colors"
                >
                  Landhaus Küchen
                </Link>
              </li>
            </ul>
          </div>

          {/* Planificare & Contact */}
          <div>
            <h4 className="font-medium mb-6">Planificare</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/planificare"
                  className="text-background/70 text-sm hover:text-background transition-colors"
                >
                  Sfaturi Planificare
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 text-sm hover:text-background transition-colors">
                  Programează Vizită
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="text-background/70 text-sm hover:text-background transition-colors">
                  Despre Nolte
                </Link>
              </li>
            </ul>

            <h4 className="font-medium mb-4 mt-8">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">Ipotești, Suceava</span>
              </li>
              <li>
                <a
                  href="tel:+40730992255"
                  className="flex items-center gap-3 text-background/70 text-sm hover:text-background transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  0730 99 22 55
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@noltesuceava.ro"
                  className="flex items-center gap-3 text-background/70 text-sm hover:text-background transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  contact@noltesuceava.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} Nolte Küchen Suceava. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politica-confidentialitate"
              className="text-background/70 text-sm hover:text-background transition-colors"
            >
              Politica de confidențialitate
            </Link>
            <Link
              href="/termeni-conditii"
              className="text-background/70 text-sm hover:text-background transition-colors"
            >
              Termeni și condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
