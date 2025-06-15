import { AtSign, Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Image src="/logo2.png" alt="APJESC" width={120} height={158} quality={100} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">MENU</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#sobre" className="text-gray-400 hover:text-yellow-500">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/#parceiros" className="text-gray-400 hover:text-yellow-500">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link href="/associados" className="text-gray-400 hover:text-yellow-500">
                  Associados
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-gray-400 hover:text-yellow-500">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-gray-400 hover:text-yellow-500">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/honorarios.pdf" target="_blank" className="text-gray-400 hover:text-yellow-500">
                  Honorários
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CONTATO</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Rua Esteves Júnior, 50 - Sala 404, Edifício Top Tower, Centro, Florianópolis/SC
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <AtSign className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">apjesc@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <Link
                  href="https://www.facebook.com/106455424929511/posts/106459201595800/?substory_index=0"
                  className="text-gray-400 hover:text-yellow-500"
                >
                  Facebook
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <Link
                  href="https://www.instagram.com/apjesc/?igshid=1azw0ub0ri53b"
                  className="text-gray-400 hover:text-yellow-500"
                >
                  Instagram
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <Link
                  href="https://www.linkedin.com/in/apjesc-associa%C3%A7%C3%A3o-de-peritos-b90141211/"
                  className="text-gray-400 hover:text-yellow-500"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} APJESC - Todos os direitos reservados</p>
          <a href="https://www.codelabz.com.br/" className="flex items-center gap-2 mt-4 md:mt-0">
            Desenvolvido por:
            <div className="relative">
              <Image src="/codelabz.svg?height=24&width=96" alt="CodeLabz" width={20} height={20} className="object-contain" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
