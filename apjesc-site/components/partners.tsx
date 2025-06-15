"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "AACRIMESC",
      image: "/parceiro1.png",
      link: "https://aacrimesc.org.br/",
    },
    {
      id: 2,
      name: "SJM Perícias",
      image: "/parceiro2.jpeg",
      link: "https://www.instagram.com/sjmpericias/?utm_medium=copy_link",
    },
    // {
    //   id: 3,
    //   name: "Zenatti Consultoria Pericial",
    //   image: "/parceiro3.jpeg",
    //   link: "https://instagram.com/zenatti.consultoriapericial?igshid=OGQ5ZDc2ODk2ZA==",
    // },
    {
      id: 4,
      name: "Sabino Perícias",
      image: "/logo-sabino.png",
      link: "https://www.instagram.com/sabinopericias/",
    },
    {
      id: 5,
      name: "Parceiro 5",
      image: "/logo_index.jpeg",
      link: "https://www.instagram.com/sabinopericias/",
    },
  ]

  const [currentPartner, setCurrentPartner] = useState(0)

  const nextPartner = () => {
    setCurrentPartner((prev) => (prev + 1) % partners.length)
  }

  const prevPartner = () => {
    setCurrentPartner((prev) => (prev - 1 + partners.length) % partners.length)
  }

  return (
    <section id="parceiros" className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10 text-center font-heading">Parceiros</h2>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-6">
            {partners.map((partner) => (
              <Link key={partner.id} href={partner.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-4 rounded-lg shadow-none border hover:shadow-lg transition-shadow duration-300 h-40 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <button
            onClick={prevPartner}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full"
            aria-label="Parceiro anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex justify-center">
            <Link href={partners[currentPartner].link} target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-40 w-64 flex items-center justify-center mx-auto">
                <div className="relative w-32 h-32">
                  <Image
                    src={partners[currentPartner].image || "/placeholder.svg"}
                    alt={partners[currentPartner].name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          <button
            onClick={nextPartner}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full"
            aria-label="Próximo parceiro"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
