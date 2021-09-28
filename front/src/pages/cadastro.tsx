import React, { useRef, useCallback, useState } from 'react';

import Head from 'next/head';

import MenuBar from '../components/MenuBar';

import * as Yup from 'yup';
import Textarea from '../components/Textarea';

import Input from '../components/Input';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { MaxContent, FormContent } from '../styles/styled/Cadastro/styles';
import getValidationErrors from '../utils/getValidationErrors';
import api from '../services/api';

function Course() {
  const formRef = useRef<FormHandles>(null);
  const [formComplete, setFormComplete] = useState(false);

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
          oab: Yup.string(),
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

        await api.post('/free/associate', data);

        setFormComplete(true);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [],
  );

  return (
    <>
      <Head>
        <title>APJESC - Cadastro de Associados</title>

        <meta name="description" content="APJESC - Cadastro de Associados" />
        <meta property="og:title" content="APJESC - Cadastro de Associados" />
      </Head>
      <MenuBar />

      <MaxContent>
        {/* <BackButton /> */}
        <p>
          ANUIDADE VALOR:
          À VISTA = R$ 500,00
          PRAZO = 12 parcelas mensais de R$ 50,00
        </p>
        <FormContent>
          {formComplete && (
            <div className="div_congratulations">
              <img src="congratulations.svg" alt="Congratulations" />
              <h2>Seu cadastro foi para a fase de análise!</h2>

              <p>Para análise e aprovação, enviar os seguintes documentos para o e-mail
                <a href="mailto:apjesc@gmail.com">apjesc@gmail.com</a>
                <br />
                - RG e CPF, ou CNH;
                <br />
                - Comprovante de Domicílio Profissional em Santa Catarina;
                <br />
                - Comprovante de Escolaridade;
                <br />
                - Comprovante de Especialidade ou Curso Livre na área de atuação pericial;
                <br />
                - Foto em formato 3x4, ser recente (registrada há no máximo 6 meses) e tirada de frente
                contra um fundo branco e com iluminação uniforme</p>
            </div>
          )}

          {!formComplete && (

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Cadastro de Associado</h1>
              <h3>Dados Pessoais</h3>

              <Input name="name" label="Nome Completo" />

              <div className="div_agroup">
                <Input name="rg" label="Rg" />
                <Input name="emissor" label="Órgão Emissor " />
                <Input name="rg_uf" label="UF" />
                <Input name="shipping_date" label="Data de Expedição" />
              </div>

              <div className="div_agroup">
                <Input name="birthDate" label="Data de Nascimento" />
                <Input name="phone" label="Telefone" />
              </div>

              <div className="div_agroup">
                <Input name="cpf" label="CPF" />
                <Input name="naturalness" label="Naturalidade" />
                <Input name="naturalness_uf" label="UF" />
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

              <Input name="profession" label="Profissão" />
              <Input name="acting" label="Atuação" />
              <Input name="oab" label="Registro de Associado (Não Obrigatório)" />

              <div className="div_agroup">
                <Input name="education" label="Escolaridade" />
                <Input name="email_profession" label="Email Profissional" />
              </div>

              <Textarea name="specialization" label="Descreva suas especializações" />

              <button type="submit">Cadastrar</button>
            </Form>
          )}

        </FormContent>
      </MaxContent>
    </>
  );
}


export default Course