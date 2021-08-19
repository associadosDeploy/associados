import React from 'react';

import { Container } from './styles';
import Link from 'next/link';

const MenuBar: React.FC = () => {

  return (
    <Container>
      <Link href="/cadastro">
        <div>
          <img src="banner.jpg" alt="banner" className="banner_web" />
          <img src="banner_cel.jpg" alt="banner" className="banner_mob" />
        </div>
      </Link>
    </Container>
  );
};

export default MenuBar;