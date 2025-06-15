'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { getAssociados } from "../actions/associados"
import { Book, Calendar, IdCard, Mail, Phone, Search } from "lucide-react"
import { useState, useEffect } from "react"
import type { AssociateProps } from "../actions/associados"

export default function AssociadosPage() {
  const [associados, setAssociados] = useState<AssociateProps[]>([])
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAssociados() {
      try {
        const data = await getAssociados(name)
        setAssociados(data)
      } catch (error) {
        console.error('Erro ao carregar associados:', error)
      } finally {
        setLoading(false)
      }
    }

    loadAssociados()
  }, [name])

  if (loading) {
    return <div className="text-center py-12">Carregando associados...</div>
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center font-heading text-yellow-500">Nossos Associados</h1>

      <div className="flex gap-4 items-center bg-zinc-200 p-4 rounded-lg mb-8">
        <input type="text" placeholder="Busca pelo nome" className="bg-transparent w-full" onBlur={(e) => setName(e.target.value)} />
        <Search size={20} />
      </div>

      <div className="flex flex-col gap-4 mb-4 items-center justify-center">
        <h3>Legenda</h3>

        <div className="flex gap-4 mb-4 items-center justify-center">
          <div className="flex gap-2 items-center"><IdCard size={20} />Registro de Associado</div>
          <div className="flex gap-2 items-center"><Calendar size={20} />Data de Associação</div>
          <div className="flex gap-2 items-center"><Phone size={20} />Telefone</div>
          <div className="flex gap-2 items-center"><Mail size={20} />Email</div>
          <div className="flex gap-2 items-center"><Book size={20} />Especialidades</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {associados.map((associado) => (
          <Card key={associado.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-96 w-full">
              <Image src={associado.avatar || "/placeholder.svg"} alt={associado.name} fill className="object-cover object-center" />
            </div>
            <CardContent className="p-6">
              <h1 className="mb-2 font-bold text-yellow-600 border-b p-2">{associado.name}</h1>

              <div className="flex gap-2 mb-4 w-full">
                <div className="flex items-center gap-2 text-sm w-full"><IdCard size={20} />{associado.oab}</div>
                <div className="flex items-center gap-2 text-sm w-full"><Calendar size={20} />{associado.affiliation}</div>
              </div>

              <div className="flex flex-col gap-4 mb-4 w-full">
                <div className="flex items-center gap-2 text-sm w-full"><Phone size={20} />{associado.phone}</div>
                <div className="flex items-center gap-2 text-sm w-full"><Mail size={20} />{associado.email_profession}</div>
              </div>

              <div className="flex items-center gap-2 text-sm w-full ">
                <div className="w-5">
                  <Book size={20} />
                </div>
                <p className="max-h-20 truncate text-wrap ">{associado.specialization}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
