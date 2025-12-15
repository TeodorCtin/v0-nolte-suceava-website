"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <section id="programare" className="py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-accent-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-4">Mulțumim pentru programare!</h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            Am primit cererea ta și te vom contacta în cel mai scurt timp pentru a confirma întâlnirea la showroom-ul
            nostru din Suceava.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
          >
            Fă o altă programare
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="programare" className="py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <p className="text-xs tracking-widest text-primary-foreground/60 uppercase mb-4">Programează o vizită</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6">
              Vino să descoperi <em className="font-serif italic">bucătăria visurilor</em> tale
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Programează o vizită la showroom-ul nostru din Ipotești, Suceava. Un consultant dedicat te va ajuta să
              explorezi opțiunile și să începi călătoria către bucătăria perfectă.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Program showroom</p>
                  <p className="text-sm text-primary-foreground/60">Luni - Vineri: 09:00 - 18:00</p>
                  <p className="text-sm text-primary-foreground/60">Sâmbătă: 10:00 - 14:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Contactează-ne</p>
                  <p className="text-sm text-primary-foreground/60">0730 99 22 55</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-medium text-foreground mb-6">Completează formularul</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-muted-foreground">
                    Nume complet *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ion Popescu"
                      className="pl-10"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm text-muted-foreground">
                    Telefon *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07XX XXX XXX"
                      className="pl-10"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-muted-foreground">
                  Email *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@exemplu.ro"
                    className="pl-10"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm text-muted-foreground">
                    Data preferată *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      className="pl-10"
                      required
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm text-muted-foreground">
                    Ora preferată *
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      className="pl-10"
                      required
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-muted-foreground">
                  Mesaj (opțional)
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Spune-ne mai multe despre proiectul tău..."
                    className="pl-10 min-h-[100px]"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-base"
              >
                Programează întâlnirea
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Prin trimiterea acestui formular, ești de acord cu{" "}
                <a href="#" className="underline hover:text-foreground">
                  politica de confidențialitate
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
