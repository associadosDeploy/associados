import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function BecomeAssociate() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400 font-heading">Quero ser um associado</h2>

          <div className="flex flex-row items-center">
            <div className="relative mx-auto mb-6 flex-1 flex items-center justify-center">
              <Image
                src="/CARTEIRA_ILUSTRACAO.png"
                alt="Ilustração de carteira"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            <div className="flex-1 flex justify-center flex-col items-center">
              <p className="text-base text-gray-300 mb-8 text-start">
                Se você tem interesse de se tornar um associado, clique no botão abaixo e responda o formulário
              </p>

              <Button asChild size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 py-6 text-base w-full">
                <Link href="/cadastro">Associar-se</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
