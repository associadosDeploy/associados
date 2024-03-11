import React from 'react';
import Link from 'next/link';

import { Container, TopFooter, BottomFooter, MaxContent } from './styles';

import { FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {

  return (
    <Container>
      <TopFooter>
        <MaxContent>
          <div>
            <img src="logo2.png" alt="logo" />
          </div>

          <div>
            <span>MENU</span>
            <Link href="/#sobre">
              Sobre
            </Link>

            <Link href="/#parceiros">
             Parceiros
            </Link>

            <Link href="/associados">
            Associados
            </Link>

            <Link href="/cursos">
              Cursos
            </Link>

            <Link href="/#contato">
             Contato
            </Link>
          </div>

          <div id="contato">
            <span>CONTATO</span>
            <Link href="">
              <FaEnvelope size={20} />
              APJESC@gmail.com
            </Link>
            <Link href="https://www.linkedin.com/in/apjesc-associa%C3%A7%C3%A3o-de-peritos-b90141211/">
              <FaLinkedin size={20} />
              Linkedin
            </Link>
            <Link href="https://www.facebook.com/106455424929511/posts/106459201595800/?substory_index=0">
              <FaFacebook size={20} />
              Facebook
            </Link>
            <Link href="https://www.instagram.com/apjesc/?igshid=1azw0ub0ri53b">
              <FaInstagram size={20} />
              Instagram
            </Link>
          </div>
        </MaxContent>
      </TopFooter>
      <BottomFooter>
        <div>
          <span>© {new Date().getFullYear()} APEJESC - Todos os direitos reservados</span>

          <Link href="https://www.codelabz.com.br/" style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 4, 

          
          }}>
            Desenvolvido por : <img src="codelabz.svg" alt="codelabz" />
          </Link>
        </div>
      </BottomFooter>
    </Container>
  );
};

export default Footer;