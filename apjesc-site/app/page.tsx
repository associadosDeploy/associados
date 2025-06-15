import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Headphones, File, ScrollText, Scale, Siren, Car, Laptop, Signature } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Banner from "@/components/banner"
import Partners from "@/components/partners"
import BecomeAssociate from "@/components/become-associate"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <Banner />

      {/* About Section */}
      <section id="sobre" className="py-16 bg-black/95 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold font-heading">Sobre nós</h1>
              <p className="text-gray-300">
                Associação de Peritos Judiciais do Estado de Santa Catarina (APJESC), iniciou suas atividades em 28 de
                outubro do ano de 2020, com sede e foro na Capital, localizada à rua Esteves Júnior, 50 - Sala 404,
                Edifício Top Tower, Centro, CEP: 88.015-130, Florianópolis/SC. Endereço eletrônico: apjesc@gmail.com
              </p>
              <p className="text-gray-300">
                Somos uma associação que nasceu com intuito de representar e valorizar o ofício do perito catarinense de
                maneira igualitária e apartidária em todas as suas atuações e em caráter especial, junto ao poder
                judiciário e as outras entidades que necessitem de serviços profissionais nas áreas específicas de cada
                associado. Peritos Especialistas em diversas áreas do conhecimento, ávidos por aprimoramento, e
                comprometidos com a ética na atuação e em sua representatividade. Somos uma congregação de profissionais
                atuantes na esfera judicial engajados e motivados em normatizar nossa atuação no Estado de Santa
                Catarina e no Brasil.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-96 h-96 rounded-lg flex items-center justify-center bg-zinc-800">
                <Image src="/logo-full.png" alt="APJESC" width={120} height={140.82} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Services Section */}
      <section className="py-16 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">Áreas de Atuação</h2>
            <p className="text-lg text-gray-300">
              Nossos peritos são especialistas em diversas áreas do conhecimento, prontos para atender às necessidades
              do poder judiciário e outras entidades.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Perícia Grafotécnica", icon: <Signature className="h-6 w-6" /> },
              { title: "Perícia Documental", icon: <File className="h-6 w-6" /> },
              { title: "Perícia Áudio", icon: <Headphones className="h-6 w-6" /> },
              { title: "Perícia Contábil", icon: <ScrollText className="h-6 w-6" /> },
              { title: "Perícia Judicial", icon: <Scale className="h-6 w-6" /> },
              { title: "Perícia Criminal", icon: <Siren className="h-6 w-6" /> },
              { title: "Perícia Balística", icon: <Briefcase className="h-6 w-6" /> },
              { title: "Perícia Digital", icon: <Laptop className="h-6 w-6" /> },
              { title: "Perícia Acidente de trânsito", icon: <Car className="h-6 w-6" /> },
            ].map((service, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-yellow-500 rounded-full text-black">{service.icon}</div>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Profissionais altamente qualificados com experiência em {service.title}.
                </p>
                {/* <Link href="/areas" className="text-yellow-400 inline-flex items-center hover:text-yellow-300">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Become Associate Section */}
      <BecomeAssociate />

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center font-heading">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-yellow-100 rounded-full">
                          <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Endereço</p>
                          <p className="text-gray-600 mt-1">
                            Rua Esteves Júnior, 50 - Sala 404, Edifício Top Tower, Centro, CEP: 88.015-130,
                            Florianópolis/SC
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-yellow-100 rounded-full">
                          <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">E-mail</p>
                          <p className="text-gray-600 mt-1">apjesc@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium mb-3">Redes Sociais</h4>
                      <div className="flex space-x-4">
                        <a
                          href="https://www.facebook.com/106455424929511/posts/106459201595800/?substory_index=0"
                          className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/apjesc/?igshid=1azw0ub0ri53b"
                          className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/apjesc-associa%C3%A7%C3%A3o-de-peritos-b90141211/"
                          className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
