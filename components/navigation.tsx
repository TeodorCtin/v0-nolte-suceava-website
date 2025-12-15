"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NolteLogo } from "@/components/nolte-logo"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  const navItems = [
    { href: "/", label: "Acasă" },
    {
      href: "/inspiratie",
      label: "Inspirație",
      dropdown: [
        { href: "/inspiratie", label: "Colecții Bucătării" },
        { href: "/inspiratie#idei", label: "Idei de Design" },
        { href: "/galerie", label: "Proiecte Realizate" },
      ],
    },
    {
      href: "/produse",
      label: "Produse",
      dropdown: [
        { href: "/produse", label: "Toate Bucătăriile" },
        { href: "/nolte-neo", label: "Nolte NEO" },
        { href: "/produse#trend", label: "Trend Küchen" },
        { href: "/produse#landhaus", label: "Landhaus Küchen" },
        { href: "/produse#zeitlose", label: "Zeitlose Küchen" },
      ],
    },
    { href: "/planificare", label: "Planificare" },
    { href: "/despre-noi", label: "Despre Nolte" },
    { href: "/galerie", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-foreground text-background py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+40730992255" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>0730 99 22 55</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Ipotești, Suceava</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-background/70">Showroom Autorizat Nolte Küchen</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <NolteLogo width={130} height={55} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm transition-colors py-2 ${
                      pathname === item.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="h-3 w-3" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-48">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
                <Link href="/contact">Programează vizită</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-foreground py-2 border-b border-border/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block text-muted-foreground py-2 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Programează vizită
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
