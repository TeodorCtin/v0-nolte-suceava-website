import Image from "next/image"

export function AboutSection() {
  return (
    <section id="despre" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image src="/luxury-kitchen-showroom-interior-suceava-romania-e.jpg" alt="Showroom Nolte Suceava" fill className="object-cover" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl max-w-[200px]">
              <p className="text-4xl font-bold">70+</p>
              <p className="text-sm mt-1">ani de excelență germană</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">Showroom Suceava</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6">
              Lasă să te inspire colecția noastră de <em className="font-serif italic">bucătării germane</em>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                De aproape 70 de ani, <strong className="text-foreground">Nolte Küchen</strong> combină precizia germană
                cu un design rafinat pentru a crea bucătării care nu doar că arată ca un vis, ci funcționează cu un
                farmec și se simt ca acasă.
              </p>
              <p>
                La showroom-ul nostru din <strong className="text-foreground">Ipotești, Suceava</strong>, te invităm să
                vezi și să simți personal diferența Nolte Küchen. Vei descoperi o gamă variată de modele, culori și
                finisaje care îmbină tradiția cu tehnologia modernă.
              </p>
              <p>
                Aici, fiecare detaliu contează – de la fronturile de uși elegante, la blaturile din materiale de cea mai
                înaltă calitate. Vino să explorezi un spațiu conceput pentru a inspira și a transforma gătitul într-o
                adevărată plăcere!
              </p>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Proiecte realizate</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">15</p>
                <p className="text-sm text-muted-foreground">Ani experiență</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Satisfacție clienți</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
