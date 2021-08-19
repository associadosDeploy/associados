/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useCallback, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useParams } from 'react-router-dom';

import * as Yup from 'yup';
import Menu from '../../components/Menu';

import Input from '../../components/Input';
import ImageInput from '../../components/ImageInput';
import Button from '../../components/Button';
import Select from '../../components/Select';

import Loading from '../../components/Loading';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import { Container, Content, ContentContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface Transaction {
  id: string,
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
  visible: boolean,
  valid: number,
}

const AlterarAssociado: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [associate, setAssociate] = useState<Transaction>();
  const { addToast } = useToast();

  const { id } = useParams<Record<string, string>>();

  const selectValidOptions = [
    { id: 1, value: 1, label: 'Aprovado' },
    { id: 2, value: 2, label: 'Recusado' },
  ]

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          city: Yup.string()
            .required('Cidade é obrigatório'),
          state: Yup.string()
            .required('Estado é obrigatório'),
          cep: Yup.string()
            .required('CEP é obrigatório'),
          oab: Yup.string()
            .required('Número da OAB é obrigatório'),
          cpf: Yup.string()
            .required('CPF obrigatório'),
          birthDate: Yup.string()
            .required('Data de nascimento obrigatória'),
          name: Yup.string()
            .required('Nome completo é obrigario'),
          rg: Yup.string()
            .required('RG é obrigario'),
          rg_uf: Yup.string()
            .required('UF RG é obrigario'),
          emissor: Yup.string()
            .required('Orgão emissor é obrigario'),
          shipping_date: Yup.string()
            .required('Data de expidissão é obrigario'),
          naturalness: Yup.string()
            .required('Naturalidade é obrigario'),
          naturalness_uf: Yup.string()
            .required('Estado de naturalidade é obrigario'),
          address: Yup.string()
            .required('Endereço é obrigario'),
          email_data: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          email_profession: Yup.string()
            .required('E-mail Profissional obrigatório')
            .email('Digite um e-mail válido'),
          profession: Yup.string()
            .required('Profissão é obrigario'),
          education: Yup.string()
            .required('Escolaridade é obrigario'),
          specialization: Yup.string()
            .required('Especialização é obrigario'),
          phone: Yup.string()
            .required('Telefone é obrigario'),
          acting: Yup.string()
            .required('Atuação é obrigario'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put(`/associates/${id}`, data);

        addToast({
          type: 'success',
          title: 'Associado Alterado',
          description: 'As informações do associado foram alteradas com sucesso',
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro Associado Alterado',
          description: 'Ocorreu um erro ao alterar as informações do associado',
        });
      }
    },
    [addToast, id],
  );


  useEffect(() => {
    async function loadAssociate(): Promise<void> {
      await api.get(`/associates/find/${id}`).then(response => {
        formRef?.current?.setData(response.data);
      });
    }

    loadAssociate();
  }, [id]);

  async function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {

    if (event.target.files && event.target.files[0]) {
      try {
        const data = new FormData();

        data.append('avatar', event.target.files[0]);
        data.append('id', id);

        await api.patch('/associates/avatar', data);

        addToast({
          type: 'success',
          title: 'Alteração da foto',
          description: 'Foto do associado foi alterada com sucesso !',
        });

      } catch (e) {
        addToast({
          type: 'error',
          title: 'Erro na alteração da imaFotogem',
          description: 'Ocorreu um erro ao alterar a foto do associade.',
        });
      }
    }
  }

  return (
    <Container>
      <Menu />
      <Content>
        <ContentContainer>

          <Form initialData={associate} ref={formRef} onSubmit={handleSubmit}>

            <h1>Cadastro de Associado</h1>
            <ImageInput name="avatar" onChangeCapture={handleChangeAvatar} />

            <h3>Dados Pessoais</h3>
            <Input name="name" label="Nome Completo" />

            <div className="div_agroup">
              <Input name="rg" label="RG" />
              <Input name="emissor" label="Órgão Emissor " />
              <Input name="rg_uf" label="UF" />
            </div>

            <div className="div_agroup">
              <Input name="shipping_date" label="Data de Expedição" />
              <Input name="affiliation" label="Filiação" />
            </div>

            <div className="div_agroup">
              <Input name="cpf" label="CPF" />
              <Input name="naturalness" label="Naturalidade" />
              <Input name="naturalness_uf" label="Naturalidade UF" />
            </div>

            <div className="div_agroup">
              <Input name="phone" label="Telefone" />
              <Input name="birthDate" label="Data Nascimento" />
            </div>

            <Input name="email_data" label="Email" />

            <div className="div_agroup">
              <Input name="city" label="Cidade" />
              <Input name="state" label="Estado" />
            </div>

            <div className="div_agroup">
              <Input name="address" label="Endereço (Rua, n°, Complemento)" />
              <Input name="cep" label="CEP" />
            </div>

            <h3>Dados Profissionais</h3>

            <Input name="oab" label="Número OAB" />

            <div className="div_agroup">
              <Input name="profession" label="Profissão" />
              <Input name="acting" label="Atuação" />
            </div>

            <div className="div_agroup">
              <Input name="education" label="Escolaridade" />
              <Input name="specialization" label="Especialização" />
            </div>

            <Input name="email_profession" label="Email Profissional" />

            <br />
            <label className="label_select">Status:</label>
            <Select name="valid">
              {selectValidOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>

            <Button type="submit" color="#2A2A29">Alterar</Button>
          </Form>
        </ContentContainer>
      </Content>
    </Container>
  );
};

export default AlterarAssociado;
