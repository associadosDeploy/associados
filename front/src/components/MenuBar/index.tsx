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

          <Link href="honorarios.pdf">
            Honorários
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
                
                  <FaBars size={25} onClick={() => setOpen(!open)} />
                

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

                <Link href="#contato">
                  Contato
                </Link>

                <Link href="honorarios.pdf">
                  Honorários
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