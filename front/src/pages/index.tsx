import React from 'react';

import MenuBar from '../components/MenuBar';

import Banner from '../components/Banner';

import Link from 'next/link';

import Footer from '../components/Footer';

import { AboutUs, MaxContent, Partners, PartnersCarousel, Partner, Associated, FormAssociated } from '../styles/styled/Home/styles';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Home() {

  return (
    <>
      <MenuBar />
      <Banner />

      <AboutUs id="sobre">
        <MaxContent>
          <div>
            <h1>Sobre nós</h1>
            <p>Associação de Peritos Judiciais do Estado de Santa Catarina (APJESC), iniciou suas atividades em 24 de novembro do ano de 2020, com sede e foro na Capital, localizada à rua Esteves Júnior, 50 - Sala 404, Edifício Top Tower, Centro, CEP: 88.015-130, Florianópolis/SC. Endereço eletrônico: apjesc@gmail.com, Contato: +55 48  98813-4767. </p>
            <p>Somos uma associação que nasceu com intuito de representar e valorizar o ofício do perito catarinense de maneira igualitária e apartidária em todas as suas atuações e em caráter especial, junto ao poder judiciário e as outras entidades que necessitem de serviços profissionais nas áreas específicas de cada associado.
              Peritos Especialistas em diversas áreas do conhecimento, ávidos por aprimoramento, e comprometidos com a ética na atuação e em sua representatividade.
              Somos uma congregação de profissionais atuantes na esfera judicial engajados e motivados em normatizar nossa atuação no Estado de Santa Catarina e no Brasil.</p>
          </div>

          <div>
            Em breve
            {/* <video src="">em breve</video> */}
          </div>
        </MaxContent>
      </AboutUs>

      <Partners id="parceiros">
        <MaxContent>
          <h1>Parceiros</h1>

          <PartnersCarousel className="partners_web">
            <div>
              <FaAngleLeft color="#A78B3D" size={40} />
            </div>

            <div className="content_carousel">
              <Partner>Entre em contato</Partner>
              <Partner>Entre em contato</Partner>
              <Partner>Entre em contato</Partner>
              <Partner>Entre em contato</Partner>
            </div>

            <div>
              <FaAngleRight color="#A78B3D" size={40} />
            </div>
          </PartnersCarousel>

          <PartnersCarousel className="partners_tablet">
            <div>
              <FaAngleLeft color="#A78B3D" size={40} />
            </div>

            <div>
              <Partner>Entre em contato</Partner>
              <Partner>Entre em contato</Partner>
              <Partner>Entre em contato</Partner>
            </div>

            <div>
              <FaAngleRight color="#A78B3D" size={40} />
            </div>
          </PartnersCarousel>

          <PartnersCarousel className="partners_mobile">
            <div>
              <FaAngleLeft color="#A78B3D" size={40} />
            </div>

            <div>
              <Partner>Entre em contato</Partner>
            </div>

            <div>
              <FaAngleRight color="#A78B3D" size={40} />
            </div>
          </PartnersCarousel>
        </MaxContent>

      </Partners>
      <Associated>

        <FormAssociated>
          <h1>Quero ser um associado</h1>
          <img src="ilustracao.png" alt="ilustracao" />
          <p>Se você tem interrese de se tornar um associado, clique no botão abaixo e responda o formulário</p>

          <Link href="cadastro">
            <a>Associar-se</a>
          </Link>
        </FormAssociated>
      </Associated>

      <Footer></Footer>
    </>
  );
}


export default Home