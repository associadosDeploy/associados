import React, { useState, useEffect } from 'react';

import MenuBar from '../../components/MenuBar';
import Loading from '../../components/Loading';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Link from 'next/link';
import api from '../../services/api';

import { MaxContent, Associated, SearchBar, ContentContainer } from '../../styles/styled/Associados/styles';

import { FaAddressCard, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaBook, FaSearch } from 'react-icons/fa';

interface AssociateProps {
  id: string,
  cep: string,
  city: string,
  state: string,
  oab: string,
  user_id: string,
  name: string,
  birthDate: string,
  cpf: string,
  phone: string,
  rg: string,
  emissor: string,
  rg_uf: string,
  shipping_date: string,
  naturalness: string,
  naturalness_uf: string,
  address: string,
  email_data: string,
  profession: string,
  affiliation: string,
  education: string,
  specialization: string,
  email_profession: string,
  acting: string,
  avatar: string,
  visible: boolean,
  valid: number,
}

function Associate() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [associates, setAssociates] = useState<AssociateProps[]>([]);

  useEffect(() => {
    async function loadCourses(): Promise<void> {
      setLoading(true);

      if (name) {
        await api.get(`/free/associate?name=${name}`).then(response => {
          console.log('com')
          setAssociates(response.data);
        });
      } else {
        await api.get(`/free/associate`).then(response => {
          console.log('sem')
          setAssociates(response.data);
        });
      }

      setLoading(false);
    }

    loadCourses();
  }, [name]);

  useEffect(() => { }, [])
  return (
    <ContentContainer>
      <MenuBar />

      <MaxContent>
        <Title title="Associados" />

        <SearchBar>
          <div>
            <FaSearch size={20} />
            <input type="text" placeholder="Busca pelo nome" onBlur={(e) => setName(e.target.value)} />
          </div>

          <div>
            <h3>Legenda</h3>

            <div>
              <span><FaAddressCard size={20} />Número OAB</span>
              <span><FaCalendarAlt size={20} />Data de Associação</span>
              <span><FaPhoneAlt size={20} />Telefone</span>
              <span><FaEnvelope size={20} />Email</span>
              <span><FaBook size={20} />Especialidades</span>
            </div>
          </div>
        </SearchBar>

        <Associated>
          {loading ? (
            <Loading />
          ) : (
            associates.length > 0 ? (

              associates.map((associate: AssociateProps) => (

                <Link href={`associados/${associate.id}`}>
                  <div>

                    <div>
                      <img src={associate.avatar} alt="logo" />
                    </div>

                    <div>
                      <h1>{associate.name}</h1>

                      <div>
                        <span><FaAddressCard size={20} />{associate.oab}</span>

                        <span><FaCalendarAlt size={20} />{associate.affiliation}</span>
                      </div>

                      <div>
                        <span><FaPhoneAlt size={20} />{associate.phone}</span>

                        <span><FaEnvelope size={20} />{associate.email_profession}</span>
                      </div>

                      <p><FaBook size={20} />{associate.specialization}</p>
                    </div>
                  </div>
                </Link>
              ))

            )
              : (<h3>Nenhum usuario encontrado</h3>)
          )}
        </Associated>
      </MaxContent>

      <Footer />
    </ ContentContainer>
  );
}

export default Associate