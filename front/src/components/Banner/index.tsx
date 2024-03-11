import React, { useState } from 'react';

import { Container } from './styles';
import Link from 'next/link';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const MenuBar: React.FC = () => {
  const [indexBanner, setIndexBanner] = useState(0);

  const banners = [
    {
      img: "banner03.png",
      imgCel: "bannerCell03.png",
      link: "https://www.even3.com.br/congresso-nacional-de-criminalistica-430949/?fbclid=PAAaYbEj97HRlkXSeT_5UjYga6YUXW0o1NU0nVvkc0qGnOKeLjBi6Meixo02M"
    },
    {
      img: "banner.jpg",
      imgCel: "banner_cel.jpg",
      link: "/cadastro"
    },
  ]
  return (
    <Container>
      <div className="button_content">
        <FaArrowLeft size={20} color="#fff" onClick={() => {
          if (indexBanner - 1 >= 0) {
            setIndexBanner(indexBanner - 1)
          }
        }} />
      </div>
      {
        banners[indexBanner] && (
          <Link href={banners[indexBanner].link}>
            <div>
              <img src={banners[indexBanner].img} alt="banner" className="banner_web" />
              <img src={banners[indexBanner].imgCel} alt="banner" className="banner_mob" />
            </div>
          </Link>
        )
      }
      <div className="button_content">
        <FaArrowRight size={20} color="#fff" onClick={() => {
          if (indexBanner + 1 <= banners.length - 1) {
            setIndexBanner(indexBanner + 1)
          }
        }} />
      </div>
    </Container>
  );
};

export default MenuBar;