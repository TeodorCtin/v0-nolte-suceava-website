import { Ruler, Palette, Truck, Wrench, Lightbulb, HeadphonesIcon } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Consultanță personalizată",
    description: "Înțelegem nevoile și preferințele tale pentru a crea bucătăria perfectă.",
  },
  {
    icon: Ruler,
    title: "Măsurători la fața locului",
    description: "Experții noștri vin acasă la tine pentru măsurători precise.",
  },
  {
    icon: Palette,
    title: "Design 3D",
    description: "Vizualizează bucătăria ta înainte de realizare cu randări 3D realiste.",
  },
  {
    icon: Truck,
    title: "Livrare & Montaj",
    description: "Transport și instalare profesională de către echipa noastră.",
  },
  {
    icon: Wrench,
    title: "Service & Garanție",
    description: "Suport post-vânzare și garanție extinsă pentru liniștea ta.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suport continuu",
    description: "Suntem aici pentru tine și după finalizarea proiectului.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicii" className="py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-widest text-background/60 uppercase mb-4">Servicii complete</p>
          <h2 className="text-3xl md:text-4xl font-light text-background">
            Expertiză și <em className="font-serif italic">inovație</em> în bucătărie
          </h2>
          <p className="mt-4 text-background/70 leading-relaxed">
            Echipa Nolte Suceava este aici pentru a vă oferi suport complet pe parcursul întregului proces de realizare
            a mobilierului de bucătărie al visurilor dumneavoastră.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-lg border border-background/20 hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-background">{service.title}</h3>
              <p className="text-background/70 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
