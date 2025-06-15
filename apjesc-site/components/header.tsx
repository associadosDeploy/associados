"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogIn, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    // { name: "Sobre", href: "/#sobre" },
    // { name: "Parceiros", href: "/#parceiros" },
    { name: "Associados", href: "/associados", target: false },
    { name: "Cursos", href: "/cursos", target: false },
    { name: "Honorários", href: "/honorarios.pdf", target: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-yellow-300 bg-black/95 text-yellow-500">
      <div className="container flex  items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative flex items-center justify-center py-4">
              <Image src="/logo-full.png" alt="APJESC" width={60} height={80.82} />
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.target ? "_blank" : "_self"}
              className={`text-sm font-medium transition-colors hover:text-yellow-500 ${pathname === item.href ? "text-yellow-500" : "text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="outline" className="bg-transparent text-white rounded-full">
            <Link href="/#contato">
              <span>Entrar em contato</span>
            </Link>
          </Button>

          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white flex items-center gap-2">
            <Link href="https://admin.apjesc.com.br/">
              <span>Entrar no sistema</span>
              <LogIn className="h-4 w-4" />
            </Link>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white border-yellow-500/50">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-yellow-500 ${pathname === item.href ? "text-yellow-500" : "text-white/80"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 flex items-center gap-2">
                <Link href="https://admin.apjesc.com.br/" onClick={() => setIsOpen(false)}>
                  <span>Entrar</span>
                  <LogIn className="h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
