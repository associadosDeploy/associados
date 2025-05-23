import React, { useState } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import MenuBar from '../components/MenuBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import { AboutUs, MaxContent, Partners, PartnersCarousel, Partner, Associated, FormAssociated } from '../styles/styled/Home/styles';

function Home() {
  const [indexSelect, setIndexSelect] = useState(0);
  return (
    <>
      <Head>
        <title>APJESC - Associação de Peritos Judiciais do Estado de Santa Catarina</title>

        <meta property="og:title" content="APJESC - Associação de Peritos Judiciais do Estado de Santa Catarina." />
        <meta name="description" content="Somos uma associação que nasceu com intuito de representar e valorizar o ofício do perito catarinense de maneira igualitária e apartidária em todas as suas atuações e em caráter especial, junto ao poder judiciário e as outras entidades que necessitem de serviços profissionais nas áreas específicas de cada associado.
              Peritos Especialistas em diversas áreas do conhecimento, ávidos por aprimoramento, e comprometidos com a ética na atuação e em sua representatividade.
              Somos uma congregação de profissionais atuantes na esfera judicial engajados e motivados em normatizar nossa atuação no Estado de Santa Catarina e no Brasil."></meta>
        <meta name="keywords" content="Advogados, Associação de Peritos Judiciais, Santa Catarina"></meta>
      </Head>

      <MenuBar />
      <Banner />

      <AboutUs id="sobre">
        <MaxContent>
          <div>
            <h1>Sobre nós</h1>
            <p>Associação de Peritos Judiciais do Estado de Santa Catarina (APJESC), iniciou suas atividades em 28 de outubro do ano de 2020, com sede e foro na Capital, localizada à rua Esteves Júnior, 50 - Sala 404, Edifício Top Tower, Centro, CEP: 88.015-130, Florianópolis/SC. Endereço eletrônico: apjesc@gmail.com</p>
            <p>Somos uma associação que nasceu com intuito de representar e valorizar o ofício do perito catarinense de maneira igualitária e apartidária em todas as suas atuações e em caráter especial, junto ao poder judiciário e as outras entidades que necessitem de serviços profissionais nas áreas específicas de cada associado.
              Peritos Especialistas em diversas áreas do conhecimento, ávidos por aprimoramento, e comprometidos com a ética na atuação e em sua representatividade.
              Somos uma congregação de profissionais atuantes na esfera judicial engajados e motivados em normatizar nossa atuação no Estado de Santa Catarina e no Brasil.</p>
          </div>

          <div>
            <img src="../logo2.png" alt="logo" />
            {/* <video src="">em breve</video> */}
          </div>
        </MaxContent>
      </AboutUs>

      <Partners id="parceiros">
        <MaxContent>
          <h1>Parceiros</h1>

          <PartnersCarousel className="partners_web">
            {/* <div>
              <FaAngleLeft color="#A78B3D" size={40} />
            </div> */}

            <div className="content_carousel">

              <Partner>
                <Link href="https://aacrimesc.org.br/"><img src="parceiro1.png" alt="Parceiro 1" /></Link></Partner>
              <Partner><Link href="https://www.instagram.com/sjmpericias/?utm_medium=copy_link"><img src="parceiro2.jpeg" alt="Parceiro 2" /></Link></Partner>
              <Partner><Link href="https://instagram.com/zenatti.consultoriapericial?igshid=OGQ5ZDc2ODk2ZA=="><img src="parceiro3.jpeg" alt="Parceiro 3" /></Link></Partner>
              <Partner><Link href="https://www.instagram.com/sabinopericias/"><img src="logo-sabino.png" alt="Parceiro 4" /></Link></Partner>
              <Partner><Link href="https://www.instagram.com/sabinopericias/"><img src="logo_index.jpeg" alt="Parceiro 5" /></Link></Partner>
            </div>

            {/* <div>
              <FaAngleRight color="#A78B3D" size={40} />
            </div> */}
          </PartnersCarousel>

          <PartnersCarousel className="partners_tablet">
            {/* <div>
              <FaAngleLeft color="#A78B3D" size={40} />
            </div> */}

            <div>
              <Partner>
                <Link href="https://aacrimesc.org.br/"><img src="parceiro1.png" alt="Parceiro 1" /></Link></Partner>
              <Partner><Link href="https://www.instagram.com/sjmpericias/?utm_medium=copy_link"><img src="parceiro2.jpeg" alt="Parceiro 2" /></Link></Partner>
              <Partner> <Link href="https://instagram.com/zenatti.consultoriapericial?igshid=OGQ5ZDc2ODk2ZA=="><img src="parceiro3.jpeg" alt="Parceiro 3" /></Link></Partner>
              <Partner><Link href="https://www.instagram.com/sabinopericias/"><img src="logo-sabino.png" alt="Parceiro 4" /></Link></Partner>
              <Partner><Link href="https://www.instagram.com/sabinopericias/"><img src="logo-sabino.png" alt="Parceiro 4" /></Link></Partner>
              <Partner><Link href="https://www.instagram.com/sabinopericias/"><img src="logo_index.jpeg" alt="Parceiro 5" /></Link></Partner>
            </div>

            {/* <div>
              <FaAngleRight color="#A78B3D" size={40} />
            </div> */}
          </PartnersCarousel>

          <PartnersCarousel className="partners_mobile">
            <div onClick={() => setIndexSelect(indexSelect - 1)}>
              <FaAngleLeft color="#A78B3D" size={40} />
            </div>

            <div>
              {indexSelect === 0 && (
                <Partner><Link href="https://aacrimesc.org.br/"><img src="parceiro1.png" alt="Parceiro 1" /></Link></Partner>
              )}

              {indexSelect === 1 && (
                <Partner><Link href="https://www.instagram.com/sjmpericias/?utm_medium=copy_link"><img src="parceiro2.jpeg" alt="Parceiro 2" /></Link></Partner>
              )}
              {indexSelect === 2 && (
                <Partner> <Link href="https://instagram.com/zenatti.consultoriapericial?igshid=OGQ5ZDc2ODk2ZA=="><img src="parceiro3.jpeg" alt="Parceiro 3" /></Link></Partner>
              )}
              {indexSelect === 3 && (
                <Partner><Link href="https://www.instagram.com/sabinopericias/"><img src="logo-sabino.png" alt="Parceiro 4" /></Link></Partner>
              )}
              {indexSelect === 4 && (
                 <Partner><Link href="https://www.instagram.com/sabinopericias/"><img src="logo_index.jpeg" alt="Parceiro 5" /></Link></Partner>
              )}
            
            </div>

            <div onClick={() => setIndexSelect(indexSelect + 1)}>
              <FaAngleRight color="#A78B3D" size={40} />
            </div>
          </PartnersCarousel>
        </MaxContent>

      </Partners>
      <Associated>

        <FormAssociated>
          <h1>Quero ser um associado</h1>
          <img src="CARTEIRA_ILUSTRACAO.png" alt="ilustracao" />
          <p>Se você tem interrese de se tornar um associado, clique no botão abaixo e responda o formulário</p>

          <Link href="cadastro">
            Associar-se
          </Link>
        </FormAssociated>
      </Associated>

      <Footer></Footer>
    </>
  );
}


export default Home