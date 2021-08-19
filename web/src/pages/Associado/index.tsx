/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useCallback, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { FaEyeSlash, FaEye, FaChevronDown, FaChevronUp, FaEdit, FaUserTie } from 'react-icons/fa';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Menu from '../../components/Menu';
import Select from '../../components/Select';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import Loading from '../../components/Loading';

import { Container, Content, Title, ContentContainer, TitleTable, Line } from './styles';

interface Transaction {
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
  open: boolean,
}

const Associado: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [associates, setAssociates] = useState<Transaction[]>([]);

  const [valid, setValid] = useState(1);
  const [visible, setVisible] = useState(1);

  const selectVisibleOption = [
    { id: 1, value: 1, label: 'Ativos' },
    { id: 2, value: 0, label: 'Desativos' },
  ]

  const selectValidOptions = [
    { id: 1, value: 1, label: 'Aprovados' },
    { id: 2, value: 2, label: 'Recusados' },
  ]

  const [loading, setLoading] = useState(true);
  const handleSubmit = useCallback(() => { const a = 1; return a; }, [])

  const loadAssociates = useCallback(async () => {
    setLoading(true);

    await api.get(`/associates/filter?valid=${valid}&visible=${visible}`).then(response => {
      const newAssociate = response.data.map((associete: Transaction) => { return { ...associete, open: false } })
      setAssociates(newAssociate);
      setLoading(false);
    });
  }, [valid, visible])

  useEffect(() => {

    loadAssociates();
  }, [loadAssociates]);

  async function handleChangeSituation(associateParam: Transaction) {
    try {

      await api.put(`/associates/visible/${associateParam.id}`, { visible: !associateParam.visible });

      addToast({
        type: 'success',
        title: 'Associado Situação Alterada',
        description: 'A situação do associado foi alterada com sucesso!',
      });

      loadAssociates();
    } catch (err) {

      addToast({
        type: 'error',
        title: 'Associado Desabilitado',
        description: 'Ocorreu um erro ao alterar a situação do associado.',
      });
    }
  }

  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>

          <Title>
            <h1>
              <FaUserTie size={40} />
              <span>Gerenciamento de Associados</span>
            </h1>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Select name="valid" onChange={e => setValid(Number(e.target.value))}>
                {selectValidOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>

              <Select name="visible" onChange={e => setVisible(Number(e.target.value))}>
                {selectVisibleOption.map(option => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Form>

          </Title>

          {loading ? (
            <Loading />
          ) : (
            associates.length > 0 ? (
              <>
                <TitleTable>
                  <span>Nome</span>
                  <span>Cpf</span>
                  <span>Telefone</span>
                  <span>Situação</span>
                  <span>Status</span>
                  <span>Ações</span>
                </TitleTable>

                {associates.map((associate: Transaction, index) => (
                  <Line>
                    <div>
                      <span>{associate.name}</span>
                      <span>{associate.cpf}</span>
                      <span>{associate.phone}</span>
                      <span>{associate.visible ? 'Ativo' : 'Desativo'}</span>

                      {associate.valid === 1 && (<span>Aprovado</span>)}
                      {associate.valid === 2 && (<span>Recusado</span>)}


                      <div className="action_div">

                        {associate.visible && (
                          <div className="actions" onClick={() => handleChangeSituation(associate)}>
                            <FaEyeSlash size={20} />
                            Desabilitar
                          </div>
                        )}

                        {!associate.visible && (
                          <div className="actions" onClick={() => handleChangeSituation(associate)}>
                            <FaEye size={20} />
                            Habilitar
                          </div>
                        )}

                        <div className="actions">
                          <Link to={`associados/alterar/${associate.id}`}>
                            <FaEdit size={20} />
                            Alterar
                          </Link>
                        </div>

                        <div>
                          {!associate.open && (
                            <FaChevronDown
                              size={20}
                              onClick={() => {
                                const newAssociate = associates;
                                newAssociate[index].open = true;
                                setAssociates([...newAssociate])
                              }}
                            />
                          )}

                          {associate.open && (
                            <FaChevronUp
                              size={20}
                              onClick={() => {
                                const newAssociate = associates;
                                newAssociate[index].open = false;
                                setAssociates([...newAssociate])
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    {
                      associate.open && (
                        <div className="content_div">
                          <div>
                            <h3>Dados Pessoais</h3>
                            <span>
                              RG / Órgão Emissor / UF :
                              {` ${associate.rg} / ${associate.emissor} / ${associate.rg_uf}`}
                            </span>
                            <span>
                              Data de Expedição:
                              {associate.shipping_date}
                            </span>
                            <span>
                              Filiação:
                              {associate.affiliation}
                            </span>
                            <span>
                              Naturalidade / UF :
                              {` ${associate.naturalness} / ${associate.naturalness_uf} `}
                            </span>
                            <span>
                              Data de Nascimento:
                              {associate.birthDate}
                            </span>
                            <span>
                              Endereço:
                              {` ${associate.address} - ${associate.cep} (${associate.city} / ${associate.state}) `}
                            </span>
                            <span>
                              Endereço eletrônico 1:
                              {associate.email_data}
                            </span>
                          </div>

                          <div>
                            <h3>Dados Profissionais</h3>
                            <span>
                              Número OAB:
                              {associate.oab}
                            </span>
                            <span>
                              Profissão:
                              {associate.profession}
                            </span>
                            <span>
                              Atuação:
                              {associate.acting}
                            </span>
                            <span>
                              Escolaridade / Especialização :
                              {` ${associate.education} / ${associate.specialization} `}
                            </span>
                            <span>
                              Endereço eletrônico 2 :
                              {associate.email_profession}
                            </span>
                          </div>
                        </div>
                      )
                    }
                  </Line>
                ))}
              </>
            ) : (<h3>Nenhum usuario encontrado</h3>)
          )}

        </ContentContainer>

        {/* {loading ?
          (
            <Loading>
              <h1>
                Carregando
              </h1>
              <FaSpinner size={25} />
            </Loading>
          ) :
          (
            <>
              <Title>
                <div>
                  <h1>Carteira Magaventures</h1>
                </div>

                <div>
                  <Link to="/startup/create">Criar Startup</Link>
                </div>
              </Title>
              <Startups>
                {
                  startups.map(startup => (
                    <Link to={`/startup/${startup.id}`} key={startup.id}>
                      <Startup>
                        {
                          startup.urlAvatar
                            ? (
                              <div>
                                <img src={startup.urlAvatar} alt="logo" />
                              </div>
                            ) :
                            (<h1>{startup.name}</h1>)
                        }
                      </Startup>
                    </Link>
                  ))
                }
              </Startups>
            </>
          )} */}
      </Content>
    </Container>
  );
};

export default Associado;
