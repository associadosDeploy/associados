import React, { useState } from 'react';

import Link from 'next/link';

import { NavMenu, MaxContent } from './styles';

import { FaSignInAlt, FaBars } from 'react-icons/fa';

const MenuBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavMenu>
      <MaxContent>
        <div>
          <Link href="/">
            <img src="../logo2.png" alt="logo" />
          </Link>
        </div>

        <div className="div_menu_web">
          <Link href="/#sobre">
            <a>Sobre</a>
          </Link>

          <Link href="/#parceiros">
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

          <Link href="https://admin.apjesc.com.br/">
            <div className="login_button">
              <span>Entrar</span>
              <FaSignInAlt size={20} />
            </div>
          </Link>
        </div>

        <div className="div_menu_mobile">
          <FaBars size={25} onClick={() => setOpen(!open)} />

          {open && (

            <div>
              <div>
                <a>
                  <FaBars size={25} onClick={() => setOpen(!open)} />
                </a>

                <Link href="/#sobre">
                  <a>Sobre</a>
                </Link>

                <Link href="/#parceiros">
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

            </div>
          )}
        </div>
      </MaxContent>

    </NavMenu >
  );
};

export default MenuBar;