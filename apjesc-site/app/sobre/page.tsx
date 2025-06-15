import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Target } from "lucide-react"
import Image from "next/image"

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre a APJESC</h1>

        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
          <Image src="/placeholder.svg?height=400&width=800" alt="Sede da APJESC" fill className="object-cover" />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg">
            A Associação de Peritos Judiciais do Estado de Santa Catarina (APJESC) iniciou suas atividades em 28 de
            outubro do ano de 2020, com sede e foro na Capital, localizada à rua Esteves Júnior, 50 - Sala 404, Edifício
            Top Tower, Centro, CEP: 88.015-130, Florianópolis/SC.
          </p>

          <p className="text-lg mt-4">
            Somos uma associação que nasceu com intuito de representar e valorizar o ofício do perito catarinense de
            maneira igualitária e apartidária em todas as suas atuações e em caráter especial, junto ao poder judiciário
            e as outras entidades que necessitem de serviços profissionais nas áreas específicas de cada associado.
          </p>

          <p className="text-lg mt-4">
            Peritos Especialistas em diversas áreas do conhecimento, ávidos por aprimoramento, e comprometidos com a
            ética na atuação e em sua representatividade. Somos uma congregação de profissionais atuantes na esfera
            judicial engajados e motivados em normatizar nossa atuação no Estado de Santa Catarina e no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Missão</h3>
                <p className="text-gray-600">
                  Representar e valorizar o ofício do perito catarinense, promovendo a excelência e a ética
                  profissional.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Calendar className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Fundação</h3>
                <p className="text-gray-600">
                  Fundada em 28 de outubro de 2020, a APJESC vem crescendo e fortalecendo a classe dos peritos
                  judiciais.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Localização</h3>
                <p className="text-gray-600">
                  Rua Esteves Júnior, 50 - Sala 404, Edifício Top Tower, Centro, Florianópolis/SC, CEP: 88.015-130
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
