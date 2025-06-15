import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6">
              Estamos à disposição para atender suas dúvidas, receber sugestões ou fornecer mais informações sobre a
              APJESC.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-yellow-100 rounded-full">
                      <MapPin className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p className="text-gray-600 mt-1">
                        Rua Esteves Júnior, 50 - Sala 404
                        <br />
                        Edifício Top Tower, Centro
                        <br />
                        CEP: 88.015-130, Florianópolis/SC
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-yellow-100 rounded-full">
                      <Mail className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">E-mail</h3>
                      <p className="text-gray-600 mt-1">apjesc@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Envie uma Mensagem</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Assunto da mensagem" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={5} />
                    </div>

                    <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
