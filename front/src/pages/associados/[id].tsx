import React from 'react';
import { useRouter } from 'next/router'

import MenuBar from '../../components/MenuBar';

import Title from '../../components/Title';
import api from '../../services/api';

import { MaxContent, Associated, SearchBar } from '../../styles/styled/Associado/styles';

import { FaAddressCard, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaBook, FaSearch } from 'react-icons/fa';
import BackButton from '../../components/BackButton';

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

function Associate<AssociateProps>({ associate }) {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <MenuBar />

      <MaxContent>
        <Title title="Dados do Associado" />
        <SearchBar>
          <div>
            <h3>Legenda</h3>

            <div>
              <span><FaAddressCard size={20} />Registro de Associado</span>
              <span><FaCalendarAlt size={20} />Data de Associação</span>
              <span><FaPhoneAlt size={20} />Telefone</span>
              <span><FaEnvelope size={20} />Email</span>
              <span><FaBook size={20} />Especialidades</span>
            </div>
          </div>
        </SearchBar>
        <Associated>
          <div>
            <div>
              <img src={associate.avatar} alt="Foto do Associado" />
            </div>

            <div>
              <h1>{associate.name}</h1>

              <span><FaAddressCard size={20} />{associate.oab}</span>
              <span><FaCalendarAlt size={20} />{associate.affiliation}</span>
              <span><FaPhoneAlt size={20} />{associate.phone}</span>
              <span><FaEnvelope size={20} />{associate.email_profession}</span>
              <p><FaBook size={20} />{associate.specialization}</p>

            </div>
          </div>

        </Associated>
      </MaxContent>
    </>
  );
}


Associate.getInitialProps = async ({ query }) => {
  let associate = {};

  const { id } = query;
  if (id) {
    const response = await api.get(`/free/associate/${id}`);
    associate = response.data
  }

  return { associate }
}

export default Associate