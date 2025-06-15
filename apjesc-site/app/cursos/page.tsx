'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getCursos, type CourseProps } from "../actions/cursos"

export default function CursosPage() {
  const [cursos, setCursos] = useState<CourseProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAssociados() {
      try {
        const data = await getCursos()
        setCursos(data)
      } catch (error) {
        console.error('Erro ao carregar cursos:', error)
      } finally {
        setLoading(false)
      }
    }

    loadAssociados()
  }, [])

  if (loading) {
    return <div className="text-center py-12">Carregando cursos...</div>
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center font-heading">Cursos e Eventos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cursos.map((curso) => (
          <Card key={curso.id} className="overflow-hidden transition-shadow">
            <div className="relative h-64 w-full">
              <Image src={curso.avatar || "/placeholder.svg"} alt={curso.title} fill className="object-fill " />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">{curso.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{curso.description}</p>
              {/* <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{curso.data}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{curso.horario}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{curso.local}</span>
                </div>
              </div> */}
              <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href={curso.link}>Link do Curso</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
