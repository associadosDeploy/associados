"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { set } from "date-fns"

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0)

  const banners = [
    {
      image: "/banner.jpg",
      link: "/cadastro",
    },
    {
      image: "/banner04.jpeg",
      link: "https://incendioautomotivo.com.br/",
    },
    // {
    //   image: "/banner03.png",
    //   link: "https://incendioautomotivo.com.br/",
    // },
  ]

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  useEffect(() => {
    setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
  }, [])

  return (
    <div className="relative bg-black/95">
      <div className="w-full relative">
        <button
          onClick={prevBanner}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full"
          aria-label="Banner anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <Link href={banners[currentBanner].link}>
          <div className="relative w-full h-[400px] md:h-[300px] lg:h-[500px]  overflow-hidden bg-black">
            <Image
              src={banners[currentBanner].image || "/placeholder.svg"}
              alt="Banner promocional"
              fill
              className="object-cover"
            />
          </div>
        </Link>

        <button
          onClick={nextBanner}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-full"
          aria-label="Próximo banner"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        <div className={`w-2 h-2 ${currentBanner === 0 ? 'bg-yellow-400' : 'bg-zinc-800'} rounded-full`}></div>
        <div className={`w-2 h-2 ${currentBanner === 1 ? 'bg-yellow-400' : 'bg-zinc-800'} rounded-full`}></div>
      </div>
    </div>
  )
}
