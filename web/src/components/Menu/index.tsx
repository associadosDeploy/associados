import React, { useCallback } from 'react';

import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import logoIgm from '../../assets/logo2.png';

import { useAuth } from '../../hooks/auth';

const Menu: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleClickSignOut = useCallback(() => {
    signOut();
  }, [
    signOut
  ])

  return (
    <Container>
      <div>
        <div>
          <Link to="/dashboard">
            <img src={logoIgm} alt="Magaventures" />
            <span>
              APJESC
            </span>
          </Link>
        </div>

        <div>
          <strong>{user?.name}</strong>
          <button type="button" onClick={handleClickSignOut}>
            Sair do Sistema
            <FaSignOutAlt size={18} />
          </button>
        </div>
      </div>
    </Container>
  )
}


export default Menu;
