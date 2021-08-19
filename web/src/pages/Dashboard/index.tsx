/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { FaGraduationCap, FaUserTie, FaTimes, FaCheckCircle, FaChevronDown, FaChevronUp, FaTimesCircle } from 'react-icons/fa';

import Menu from '../../components/Menu';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import {
  Container,
  Content,
  Card,
  NavMenu,
  ContentContainer,
  TitleTable,
  Table,
  ModalContent,
  DivModal,
  ButtonsGroup,
  Line
} from './styles';

interface Transaction {
  id: string,
  user_id: string,
  oab: string,
  city: string,
  cep: string,
  state: string,
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
  valid: boolean,
  open: boolean,
}

const Dashboard: React.FC = () => {
  const [associates, setAssociates] = useState<Transaction[]>([]);
  const [associateSelected, setAssociateSelected] = useState<Transaction>();

  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalDecline, setModalDecline] = useState(false);
  const [loading, setLoading] = useState(true);

  const { addToast } = useToast();

  async function loadAssociates(): Promise<void> {
    setLoading(true);

    await api.get('/associates/valid').then(response => {

      const newAssociate = response.data.map((associete: Transaction) => { return { ...associete, open: false } })
      setAssociates(newAssociate);
      setLoading(false);
    });

    setLoading(false);
  }

  useEffect(() => {
    loadAssociates();
  }, []);

  async function handleConfirmAssociate() {
    try {
      await api.put(`/associates/approve/${associateSelected?.id}`, { "valid": 1 });

      addToast({
        type: 'success',
        title: 'Aprovação Associado',
        description: 'O associado foi aprovado com sucesso!',
      });

      setModalConfirm(false);
      loadAssociates();
    } catch (e) {
      addToast({
        type: 'error',
        title: 'Erro na Aprovação do Associado',
        description: 'Ocorreu um erro ao aprovar o associado.',
      });
    }
  }

  async function handleDeclineAssociate() {
    try {
      await api.put(`/associates/approve/${associateSelected?.id}`, { "valid": 2 });

      addToast({
        type: 'success',
        title: 'Recusa Associado',
        description: 'O associado foi recusado com sucesso!',
      });

      setModalDecline(false);
      loadAssociates();
    } catch (e) {
      addToast({
        type: 'error',
        title: 'Erro na Aprovação do Associado',
        description: 'Ocorreu um erro ao recusar o associado.',
      });
    }
  }

  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>
          <h1 className="title_h1">Menu</h1>

          <NavMenu>
            <Card>
              <Link to="/cursos">
                <FaGraduationCap size={40} />
                <span>Gerenciamento de Cursos</span>
              </Link>
            </Card>

            <Card>
              <Link to="/associados">
                <FaUserTie size={40} />
                <span>Gerenciamento de Associados</span>
              </Link>
            </Card>
          </NavMenu>

          <h1 className="title_h1">Associados em análise</h1>

          {loading ? (
            <Loading />
          ) : (
            associates.length > 0 ? (
              <>
                <TitleTable>
                  <span>Nome</span>
                  <span>Cpf</span>
                  <span>Telefone</span>
                  <span>Ações</span>
                </TitleTable>

                <Table>
                  {associates.map((associate, index) => {
                    return (
                      <Line>

                        <div>
                          <span>{associate.name}</span>
                          <span>{associate.cpf}</span>
                          <span>{associate.phone}</span>

                          <div className="action_div">

                            <div
                              className="div_aprove"
                              onClick={() => {
                                setModalConfirm(true)
                                setAssociateSelected(associate)
                              }}
                            >
                              <FaCheckCircle size={20} />
                              Aprovar
                            </div>

                            <div
                              className="div_recuse"
                              onClick={() => {
                                setModalDecline(true)
                                setAssociateSelected(associate)
                              }}
                            >
                              <FaTimesCircle size={20} />
                              Recusar
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
                    )
                  })}
                </Table>
              </>
            ) : (<h3>Nenhum usuario encontrado</h3>)
          )}
        </ContentContainer>
      </Content>

      {(modalConfirm || modalDecline) && (
        <ModalContent>
          {
            modalConfirm && (
              <DivModal>
                <div>
                  <FaTimes size={20} onClick={() => { setModalConfirm(false); setAssociateSelected(undefined) }} />
                </div>

                <h2>Você tem certeza que deseja, aprovar este associado?</h2>
                <p>
                  Nome:
                  {' '}
                  {associateSelected?.name}
                </p>
                <p>
                  Cpf:
                  {' '}
                  {associateSelected?.cpf}
                </p>
                <br />
                <ButtonsGroup>
                  <Button type="button" color="#E84545" onClick={() => { setModalConfirm(false); setAssociateSelected(undefined) }}>Cancelar</Button>
                  <Button type="button" color="#7BDC4D" onClick={handleConfirmAssociate}>Confirmar</Button>
                </ButtonsGroup>
              </DivModal>
            )
          }

          {
            modalDecline && (
              <DivModal>
                <div>
                  <FaTimes size={20} onClick={() => { setModalDecline(false); setAssociateSelected(undefined) }} />
                </div>

                <h2>Você tem certeza que deseja, recusar este associado?</h2>
                <p>
                  Nome:
                  {' '}
                  {associateSelected?.name}
                </p>
                <p>
                  Cpf:
                  {' '}
                  {associateSelected?.cpf}
                </p>
                <br />
                <ButtonsGroup>
                  <Button type="button" color="#E84545" onClick={() => { setModalDecline(false); setAssociateSelected(undefined) }}>Cancelar</Button>
                  <Button type="button" color="#7BDC4D" onClick={handleDeclineAssociate}>Confirmar</Button>
                </ButtonsGroup>
              </DivModal>
            )
          }
        </ModalContent>
      )}

    </Container>
  );
};

export default Dashboard;
