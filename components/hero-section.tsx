import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="acasa" className="relative min-h-[90vh] flex">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center px-8 lg:px-16 py-20">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
            Pentru <em className="font-serif italic">Viața</em>
            <br />
            în Bucătărie
          </h1>
          <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed">
            Descoperă bucătăriile germane de excepție la showroom-ul nostru din Suceava. Design rafinat, funcționalitate
            perfectă.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base"
            >
              <Link href="/contact">Programează vizită</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/inspiratie">Vezi colecții</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="/modern-luxury-german-kitchen-interior-with-island-.jpg"
          alt="Bucătărie modernă Nolte"
          fill
          className="object-cover"
          priority
        />
        {/* Video Play Button Overlay */}
        <div className="absolute bottom-8 right-8 bg-background rounded-lg shadow-xl p-2">
          <div className="relative w-48 h-32 rounded overflow-hidden">
            <Image
              src="/kitchen-showroom-video-thumbnail-elegant.jpg"
              alt="Vizită virtuală showroom"
              fill
              className="object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-foreground/20 hover:bg-foreground/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Play className="h-5 w-5 text-accent-foreground ml-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
