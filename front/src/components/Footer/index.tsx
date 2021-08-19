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
            <Link href="#sobre">
              <a>Sobre</a>
            </Link>

            <Link href="#parceiros">
              <a>Parceiros</a>
            </Link>

            <Link href="/associados">
              <a>Associados</a>
            </Link>

            <Link href="/cursos">
              <a>Cursos</a>
            </Link>

            <Link href="#contato">
              <a>Contato</a>
            </Link>
          </div>

          <div id="contato">
            <span>CONTATO</span>
            <a href="">
              <FaEnvelope size={20} />
              APJESC@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/apjesc-associa%C3%A7%C3%A3o-de-peritos-b90141211/">
              <FaLinkedin size={20} />
              Linkedin
            </a>
            <a href="https://www.facebook.com/106455424929511/posts/106459201595800/?substory_index=0">
              <FaFacebook size={20} />
              Facebook
            </a>
            <a href="https://www.instagram.com/apjesc/?igshid=1azw0ub0ri53b">
              <FaInstagram size={20} />
              Instagram
            </a>
          </div>
        </MaxContent>
      </TopFooter>
      <BottomFooter>
        <span>COPYRIGHT © 2020 CODE LABZ</span>
      </BottomFooter>
    </Container>
  );
};

export default Footer;