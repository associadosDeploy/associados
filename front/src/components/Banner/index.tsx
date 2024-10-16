import React, { useState } from 'react';

import { Container } from './styles';
import Link from 'next/link';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const MenuBar: React.FC = () => {
  const [indexBanner, setIndexBanner] = useState(0);

  const banners = [
    {
      imgCel: "Molinari_BannerSite.png",
      img: "Molinari_BannerSite.png",
      link: "https://incendioautomotivo.com.br/"
    },
    {
      img: "banner4.jpeg",
      imgCel: "banner4.jpeg",
      link: "https://www.enqfor.org.br/"
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
          } else {
            setIndexBanner(banners.length - 1)
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
          } else {
            setIndexBanner(0)
          }
        }} />
      </div>
    </Container>
  );
};

export default MenuBar;